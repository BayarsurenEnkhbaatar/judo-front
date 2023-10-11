
import React, { useEffect, useState } from "react";
import { InMemoryDatabase } from "brackets-memory-db";
import { BracketsManager } from "brackets-manager";

import "brackets-viewer/dist/brackets-viewer.min.css";
import "brackets-viewer/dist/brackets-viewer.min.js";

const storage = new InMemoryDatabase();
const manager = new BracketsManager(storage);

const SubDraw = ({ type }) => {
  const [data, setData] = useState();

  // const teams = 4; //bagiin too
  const size = 8; // 4 / 8 | 16 | 32 | 64 | 128  husnegtiin hemjee
  // const participants = Array(teams)
  //   .fill(0)
  //   .map((e, i) => `Team ${i + 5}`);
  const participants = [
    {
      id: 1,
      name: "Ganbat",
      flag: "🇲🇳",
    },
    {
      id: 2,
      name: "Sukhbat",
      flag: "🇲🇳",
    },
    {
      id: 3,
      name: "sss",
      flag: "🇲🇳",
    },
    {
      id: 4,
      name: "xxx",
      flag: "🇲🇳",
    },
  ];
  const participant1 = [
    {
      id: 1,
      name: "Ganbat",
      flag: "🇲🇳",
    },
    {
      id: 2,
      name: "Sukhbat",
      flag: "🇲🇳",
    },
  ];

  const stages = [
    {
      id: 1,
      name: "Quarter Finals",
      type: "single_elimination",
    },
    {
      id: 2,
      name: "Semi Finals",
      type: "single_elimination",
    },
    {
      id: 3,
      name: "Finals",
      type: "single_elimination",
    },
  ];
  
  const matches = [
    {
      id: 1,
      stageId: 1,
      round: 1,
      opponent1: participants[0],
      opponent2: participants[1],
    },
    {
      id: 2,
      stageId: 1,
      round: 1,
      opponent1: participants[2],
      opponent2: participants[3],
    },
    // ...
  ];

  useEffect(() => {
    rendering();
  }, []);

  useEffect(() => {
    rerendering();
  }, [data]);

  const rerendering = async () => {
    const bracketsViewerNode = document.querySelector(".brackets-viewer");
    bracketsViewerNode?.replaceChildren();

    // window.bracketsViewer.onMatchClicked = async (match) => {
    window.bracketsViewer.onMatchClicked = async (match) => {
      console.log("A match was clicked", match);

      try {
        await manager.update.match({
          id: match.id,
          opponent1: { score: 5 },
          opponent2: { score: 7, result: "win" }
        });
        const tourneyData2 = await manager.get.currentMatches(0);
        const tourneyData = await manager.get.stageData(0);
        setData(tourneyData);
        console.log("A tourney", tourneyData2);
      } catch (error) {}
    };

    if (data && data.participant !== null) {
      // This is optional. You must do it before render().
      window.bracketsViewer.setParticipantImages(
        data.participant.map((participant) => ({
          participantId: participant.id || 1,
          imageUrl: "https://github.githubassets.com/pinned-octocat.svg"
        }))
      );

      window.bracketsViewer.render(
        {
          stages: data.stage,
          matches: data.match,
          matchGames: data.match_game,
          participants: data.participant
        },
        {
          customRoundName: (info, t) => {
            // You have a reference to `t` in order to translate things.
            // Returning `undefined` will fallback to the default round name in the current language.
            if (info.fractionOfFinal === 1 / 2) {
              if (info.groupType === "single-bracket") {
                // Single elimination
                return "Semi Finals";
              } else {
                // Double elimination
                return `${t(`abbreviations.${info.groupType}`)} ESemi Finals`;
              }
            }
            if (info.fractionOfFinal === 1 / 4) {
              return "Quarter Finals";
            }

            if (info.finalType === "grand-final") {
              if (info.roundCount > 1) {
                return `${t(`abbreviations.${info.finalType}`)} Final Round ${
                  info.roundNumber
                }`;
              }
              return `Grand Final`;
            }
          },
          participantOriginPlacement: "before",
          separatedChildCountLabel: true,
          showSlotsOrigin: true,
          showLowerBracketSlotsOrigin: true,
          highlightParticipantOnHover: true,
        }
      );
    }
    console.log(data);
  };

//render hj gargaj irj baigaa heseg
  const rendering = async () => {
    await manager.create({
      name: "Tournament Braxckets",
      tournamentId: 0,
      // type,
      // type: 'round_robin',
      type: "single_elimination",
      seeding: participants,
      settings: {
        seedOrdering: ["inner_outer"],
        balanceByes: false,
        size: size,
        matchesChildCount: 0,
        consolationFinal: false
      }
    });
    const tournamentData = await manager.get.stageData(0);
    console.log(tournamentData, ">>>>>>>>>>>>>>>>")
    setData(tournamentData);
  };


  return (
    <div>
      <div className="TournamentBracketsEditor">
        <div className="brackets-viewer"></div>
      </div>
    </div>
  )
}

export default SubDraw



import React from 'react';
import { Bracket } from 'react-tournament-bracket';

const Brackets = ({ tournamentBracketData }) => {
  const [state, setState] = React.useState({
    matches: tournamentBracketData,
  });

  React.useEffect(() => {
    const winningPathLength = (match) => {
      // ...
    };

    // Calculate the winning path length for each match.
    state.matches.forEach((match) => {
      match.winningPathLength = winningPathLength(match);
    });
  }, [state.matches]);

  return (
    <Bracket matches={state.matches} />
  );
};

export default Brackets;
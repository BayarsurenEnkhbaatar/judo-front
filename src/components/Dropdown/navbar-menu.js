import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function NavbarProfileMenu() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className=" flex items-center flex-col cursor-pointer">
            <img className="h-7" src="../../icons/judo.png"/>
            <h1 className="text-xs">Миний хуудас</h1>
        </div>
      </DropdownTrigger>
      <DropdownMenu className="">
        <DropdownItem key="new" className="py-2">
            <Link to='/profile' className="py-2">Байгууллагын мэдээлэл</Link>
        </DropdownItem>
        <DropdownItem className="py-2">
            <Link to='/profile/teams' className="py-2">Тамирчдын мэдээлэл</Link>
        </DropdownItem>
        <DropdownItem className="py-2">
            <Link to='/profile/teams-add' className="py-2">Тамирчин бүртгэх</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
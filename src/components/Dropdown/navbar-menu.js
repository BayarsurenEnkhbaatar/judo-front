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
        <DropdownItem key="new" className="">
            <Link to='/profile' className="py-4">Байгууллагын мэдээлэл</Link>
        </DropdownItem>
        <DropdownItem className="">
            <Link to='/profile/teams' className="py-4">Тамирчдын мэдээлэл</Link>
        </DropdownItem>
        <DropdownItem className="">
            <Link to='/profile/teams-add' className="py-4">Тамирчин бүртгэх</Link>
        </DropdownItem>
        <DropdownItem className="block md:hidden">
            <Link to='/clubs' className="py-4">Клубууд</Link>
        </DropdownItem>
        <DropdownItem className="block md:hidden">
            <Link to='/athletes' className="py-4">Тамирчид</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
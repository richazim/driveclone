"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import {DROPDOWN_MENU_ITEMS} from "@/constants";


const ActionDropdown = ({filename}: {filename: string}) => {

  return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image src="/assets/icons/dots.svg" alt="" width={20} height={20}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent onCloseAutoFocus={(event) => {event.preventDefault()}}>
          <DropdownMenuLabel>{filename}</DropdownMenuLabel>
          <DropdownMenuSeparator />
            {
                DROPDOWN_MENU_ITEMS.map((item, index) => (
                    <DropdownMenuItem key={index}><Image src={item.icon} alt="" width={20} height={20}/> {item.label}</DropdownMenuItem>
                ))
            }
        </DropdownMenuContent>
      </DropdownMenu>

  );
};

export default ActionDropdown;

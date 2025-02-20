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


const ActionDropdown = () => {
  return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image src="/assets/icons/dots.svg" alt="" width={20} height={20}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent onCloseAutoFocus={(event) => {event.preventDefault()}}>
          <DropdownMenuLabel>filename.jpg</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem><Image src="/assets/icons/edit.svg" alt="" width={20} height={20}/> Rename</DropdownMenuItem>
          <DropdownMenuItem><Image src="/assets/icons/info.svg" alt="" width={20} height={20}/> Details</DropdownMenuItem>
          <DropdownMenuItem><Image src="/assets/icons/share.svg" alt="" width={20} height={20}/> Share</DropdownMenuItem>
          <DropdownMenuItem><Image src="/assets/icons/download.svg" alt="" width={20} height={20}/> Download</DropdownMenuItem>
          <DropdownMenuItem><Image src="/assets/icons/delete.svg" alt="" width={20} height={20}/> Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

  );
};

export default ActionDropdown;

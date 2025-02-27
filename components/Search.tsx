"use client";
import React from "react";
import Image from "next/image";
import {Input} from "@/components/ui/input";

const Search = () => {

  return (
      <div className="h-full flex flex-row items-center">
        <div className="w-[70%] flex flex-row border items-center rounded-[24px] mx-[20px] my-auto">
          <span className="w-[50px] h-[24px] flex justify-center items-center">
            <Image src="/assets/icons/search.svg" alt="" width={24} height={24} className=""/>
          </span>

          <Input placeholder="Search..." className="outline-none border-0 focus-visible:ring-0" />
        </div>
      </div>
  );
};

export default Search;

"use client";

import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {SORT_TYPES} from "@/constants";


const Sort = () => {

  return (
      <Select defaultValue="$createdAt_asc">
        <SelectTrigger className="w-[250px] border-0 shadow-xl outline-0 ring-0 focus:outline-none focus:ring-0 rounded-[12px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>

        <SelectContent>
            {
                SORT_TYPES.map((type, index) => (
                    <SelectItem key={index} value={type.value}>{type.label}</SelectItem>
                ))
            }
        </SelectContent>
      </Select>

  );
};

export default Sort;

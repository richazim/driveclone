"use client";

import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Sort = () => {
  return (
      <Select defaultValue="$createdAt-asc">
        <SelectTrigger className="w-[250px] border-0 shadow-xl outline-0 ring-0 focus:outline-none focus:ring-0 rounded-[12px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="$createdAt-asc">Date de création (croissance)</SelectItem>
          <SelectItem value="$createAt-desc">Date de création (décroissance)</SelectItem>
          <SelectItem value="name-asc">Nom (croissant)</SelectItem>
            <SelectItem value="name-desc">Nom (décroissance)</SelectItem>
            <SelectItem value="size-asc">Taille (croissance)</SelectItem>
            <SelectItem value="size-desc">Taille (décroissance)</SelectItem>
        </SelectContent>
      </Select>

  );
};

export default Sort;

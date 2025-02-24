"use client";

import React from "react";

import {
  Card as CardFromShadCN,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from "next/image";
import ActionDropdown from "@/components/ActionDropdown";

const Card = () => {
  return (
      <CardFromShadCN className="">
        <CardHeader>
            <div className="flex justify-between">
                <Image src="/assets/icons/images.svg" alt="" width={30} height={30} />
                <div className="flex flex-col items-center justify-between">
                    <ActionDropdown/>
                    <p>238.7 <span>KB</span></p>
                </div>
            </div>
        </CardHeader>

        <CardContent>
          <p>fichier.png</p>
        </CardContent>

        <CardFooter className="flex flex-col items-start">
            <p>3:31am, 15 Feb</p>
          <p>By: <span>Azim</span></p>
        </CardFooter>
      </CardFromShadCN>
  );
};

export default Card;

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
import {images} from "next/dist/build/webpack/config/blocks/images";

const Card = ({
                  fileName,
                  image,
                  size,
                  date,
                  creator
              }: {fileName: string, image: string, size: number, date: string, creator: string}) => {

  return (
      <CardFromShadCN className="">
        <CardHeader>
            <div className="flex justify-between">
                <Image src={image} alt="" width={30} height={30} />
                <div className="flex flex-col items-center justify-between">
                    <ActionDropdown filename={fileName}/>
                    <p>{size} <span>KB</span></p>
                </div>
            </div>
        </CardHeader>

        <CardContent>
          <p>{fileName}</p>
        </CardContent>

        <CardFooter className="flex flex-col items-start">
            <p>{date}</p>
          <p>By: <span>{creator}</span></p>
        </CardFooter>
      </CardFromShadCN>
  );
};

export default Card;

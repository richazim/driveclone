import React from "react";
import Search from "@/components/Search";
import FileUploader from "@/components/FileUploader";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const Header = ({style}: {style: string}) => {
  return (
      <header className={style + " " + "hidden w-full sm:flex flex-row justify-between py-[10px]" }>
          <div className="flex-1">
              <Search/>
          </div>

          <div className="flex flex-row items-center pr-[10px]">
              <FileUploader/>

              <form>
                  <Button className="rounded-full h-[50px] w-[50px] ml-[20px]">
                      <Image src="/assets/icons/logout.svg" alt="" width={24} height={24}/>
                  </Button>
              </form>
          </div>
      </header>
  );
};

export default Header;

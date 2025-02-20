"use client";
import React, {useState} from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Separator} from "@/components/ui/separator";
import {NAV_ITEMS} from "@/constants";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import FileUploader from "@/components/FileUploader";
import {Button} from "@/components/ui/button";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

  return (
      <header className="flex flex-row h-[60px] w-screen justify-between items-center border px-[20px] sm:hidden">
        <Image src="/assets/icons/logo-full-brand-2.png" alt="" width={120} height={52}/>

          <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                  <Image src="/assets/icons/menu.svg" alt="" width={30} height={30} />
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                      <SheetTitle>
                          <div className="flex mr-[10px] bottom-[30px]">
                              <Image
                                  src="/assets/images/avatar.png"
                                  alt="Avatar"
                                  width={44}
                                  height={44}
                                  style={{
                                      objectFit: "contain"
                                  }}
                              />

                              <div className="ml-[15px] text-[#000]">
                                  <h3 className="font-bold font-poppins capitalize">S.A Azim</h3>
                                  <p className="text-[14px] font-light">saibouazim90@gmail.com</p>
                              </div>
                          </div>

                          <Separator className=""/>
                      </SheetTitle>

                      <nav className="mt-[70px] mr-[20px]">
                          <ul className="flex flex-1 flex-col gap-6">
                              {NAV_ITEMS.map(({ url, name, icon }) => (
                                  <li className="h-[50px]" key={name}>
                                      <Link
                                          href={url}
                                          className={cn("font-bold", pathname === url && "shad-active")}
                                      >
                                          <div
                                              className={cn(
                                                  "w-full h-full flex flex-row items-center pr-[20px] rounded-[27px]",
                                                  pathname === url && "bg-[#333F4E] text-white",
                                              )}
                                          >
                                              <Image
                                                  src={icon}
                                                  alt={name}
                                                  width={24}
                                                  height={24}
                                                  className={cn(
                                                      "ml-[20px] invert opacity-25",
                                                      pathname === url && "invert-0 opacity-100",
                                                  )}
                                              />
                                              <p className="ml-[15px]">{name}</p>
                                          </div>
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      </nav>

                      <Separator className=""/>

                      <div className="flex flex-col items-start">
                          <FileUploader/>

                          <Button className="rounded-[27px] my-[20px]">
                              <Image src="/assets/icons/logout.svg" alt="logo" width={24} height={24}/>

                              <p>Logout</p>
                          </Button>
                      </div>
                  </SheetHeader>
              </SheetContent>
          </Sheet>
      </header>
  );
};

export default MobileNavigation;

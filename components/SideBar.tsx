"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

interface PropsInterface {
  fullName: string;
  avatarUrl: string;
  email: string;
}

const SideBar = ({ fullName, avatarUrl, email }: PropsInterface) => {
  const pathname = usePathname();

  return (
    <aside className="h-screen overflow-auto lg:w-[280px] md:w-[120px] pt-[30px] pl-[20px] hidden sm:block">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full-brand-2.png"
          alt=""
          width={128}
          height={70}
          className="hidden lg:block"
        />

        <Image
          src="/assets/icons/logo-brand.svg"
          alt=""
          width={70}
          height={50}
          className="lg:hidden"
        />
      </Link>

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
                  <p className="hidden lg:block lg:ml-[15px]">{name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Image
        src="/assets/images/files-2.png"
        alt=""
        width={153}
        height={109}
        className="mx-auto mt-[20px] hidden lg:block"
      />

      <div className="flex mt-[30px] mr-[10px] bottom-[30px]">
        <Image
          src="/assets/images/avatar.png"
          alt="Avatar"
          width={44}
          height={44}
        />

        <div className="ml-[15px] hidden lg:block">
          <h3 className="font-bold font-poppins">S.A Azim</h3>
          <p className="text-[14px] text-[#A3B2C7]">saibouazim90@gmail.com</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

import React from "react";
import SideBar from "@/components/SideBar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

const Layout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <main className="flex flex-row w-screen scroll-smooth">
      <SideBar fullName="S. Azim" email="saibouazim90@gmail.com" avatarUrl="" />

      <section className="overflow-auto h-screen flex-1">
        <MobileNavigation />
        <Header style=" "/>
        <div className="bg-[#f2f4f7]">{children}</div>
      </section>

      <Toaster />
    </main>
  );
};

export default Layout;

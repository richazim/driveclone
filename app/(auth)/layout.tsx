import React from "react";
import Image from "next/image";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <section className="lg:w-[60%] flex justify-center lg:items-center w-full">
        <div className="">{children}</div>
      </section>

      <section className="lg:w-[40%] bg-[#583F40] hidden lg:block">
        <div className="mt-[2%] flex justify-center">
          <Image
            src="/assets/icons/logo-full-brand-1.png"
            alt="logo"
            width={158}
            height={70}
          />
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-[10%] flex flex-col text-white text-ellipsis w-[26.88rem]">
            <p className="text-[36px] ">
              Gérez vos fichiers de la meilleur des manières.
            </p>
            <p className="text-[16px] mt-[20px]">
              Formidable, nous avons créez le meilleur endroit pour stocker vos
              fichiers
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-[20%]">
          <Image
            src="/assets/images/files.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
      </section>
    </div>
  );
};

export default Layout;

import React from "react";
import Image from "next/image";

const Thumbnail = () => {
  return (
      <figure className="rounded-full overflow-hidden border h-[30px] w-[30px]">
        <Image src="/assets/images/files.png" alt="" width={30} height={30} style={{
            objectFit: "contain"
        }}/>
      </figure>
  );
};

export default Thumbnail;

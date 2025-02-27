import React from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Thumbnail from "@/components/Thumbnail";

const FileUploader = () => {

  return (
      <div className="flex flex-col items-start">
        <input className="hidden"/>

        <Button className="rounded-[27px]">
          <Image src="/assets/icons/upload.svg" alt="" width={24} height={24}/>

          <p>Upload</p>
        </Button>

        {true && (
            <ul className="border w-[300px] rounded-[27px] p-[10px] absolute bottom-[20px] right-[20px] bg-white">
              <h4 className="text-start">Uploading</h4>

              {[0].map((item) => {
                return (
                    <li key={item} className="flex flex-row p-[10px] border my-2 rounded-2xl">
                      <div className="flex-1 flex flex-row w-[200px]">
                        <Thumbnail/>

                        <div className="ml-[20px] flex-1 text-start">
                          file_name
                          <Image src="/assets/icons/file-loader.gif" alt="" width={80} height={26}/>
                        </div>
                      </div>

                      <Image src="/assets/icons/remove.svg" alt="" width={24} height={24}/>
                    </li>
                )
              })}
            </ul>
        )}
      </div>
  );
};

export default FileUploader;

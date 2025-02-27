import Image from "next/image";
import Chart from "@/components/Chart";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import FormattedDateTime from "@/components/FormattedDateTime";
import Thumbnail from "@/components/Thumbnail";
import ActionDropdown from "@/components/ActionDropdown";
import {NAV_ITEMS_SUMMARIES, RECENT_FILES} from "@/constants";
import {convertKilobytesToCorrectForma} from "@/lib/utils";

export default function Dashboard() {

  return (
    <div className="flex md:flex-row flex-col p-[50px] gap-[50px]">
      <section className="md:w-[50%] w-[100%]">
        <Chart />

        <div className="mt-[50px] grid md:grid-cols-2 grid-cols-1 gap-[50px] ">
          {NAV_ITEMS_SUMMARIES.map((item, key) => (
            <li key={key} className="">
              <Link href={item.url} className="block relative rounded-[20px] text-center bg-white">
                <div className="relative h-[50px]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={100}
                    height={100}
                    className="-left-[6px] -top-[14px] absolute"
                  />

                  <h4 className="absolute right-[20px] top-[15px]">{convertKilobytesToCorrectForma(item.size)}</h4>
                </div>

                <h5>{item.title}</h5>

                  <Separator className="w-[100px] mx-auto my-[20px]"/>

                  <FormattedDateTime date={item.latestDate}/>
              </Link>
            </li>
          ))}
        </div>
      </section>

      <section className="md:w-[50%] w-[100%] p-[20px] bg-white">
          <h2 className="font-bold text-2xl">Fichiers récemment uploadés</h2>
          {true ? (
              <ul className="">
                  {RECENT_FILES.map((item, key) => (
                      <li key={key} className="my-[10px] ">
                          <Link href="/" className="block flex flex-row justify-between items-center">
                              <Thumbnail filePath={item.icon}/>

                              <div className="flex-1 flex justify-between pl-[10px]">
                                  <div className="text-left flex-1">
                                      <p>{item.fileName}</p>

                                      <FormattedDateTime date="2020" className="font-light text-[10px]"/>
                                  </div>

                                  <ActionDropdown filename={item.fileName}/>
                              </div>
                          </Link>
                      </li>
                  ))}
              </ul>
          ): (
              <p>Pas encore de fichiers téléverser</p>
          )}
      </section>
    </div>
  );
}

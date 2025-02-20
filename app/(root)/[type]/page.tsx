import React from 'react';
import Sort from "@/components/Sort";
import Card from "@/components/Card";


const Page = () => {
    return (
        <div className="p-[30px]">
            <section>
                <h1 className="text-[30px] font-bold">Images</h1>

                <div className="flex flex-row justify-between">
                    <p>Total: 0 <span>MB</span></p>

                    <div className="flex flex-row justify-between items-center ">
                        <p>Sort By:</p>

                        <Sort/>
                    </div>
                </div>
            </section>

            {true ? (
                <section className="my-[50px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
                    {[0,1,2,3].map(item => (
                        <div key={item}>
                            <Card/>
                        </div>
                    ))}
                </section>
            ): (
                <p>Pas de fichier téléversé</p>
            )}
        </div>
    );
};

export default Page;
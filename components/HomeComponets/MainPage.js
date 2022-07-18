import Image from "next/image";
import React from "react";

export default function MainPage() {
  return (
    <div className="randomBox h-full w-full text-green-300">
      <div className="grid grid-rows-3  grid-flow-col gap-2">
        <div className="relative h-128 ">
          <div className=" grid h-128 grid-cols-3">
            <div className=" opacity-90 col-span-2">
              <div className=" h-full grid place-items-center p-10">
               <div className="container h-full  p-10">
               <p className="text-red-900 text-5xl  inline">Julian Mack – 
Changing the world one headline at a time.</p>
                <p className="text-red-900 text-1xl mt-16">I’m an investigative journalist with over two decades of experience. I’ve covered both Milan’s fashion week and the U.S. primaries in the same year. Above all, I believe that fair and free press is fundamental to a healthy society – the core ideal behind my work. I offer professional, unbiased, and timely articles, along with cited sources, and the highest regard for journalistic integrity you can find.</p>
               </div>
              </div>
            </div>

            <div className="bg-white grid-cols-1">
              <div className="w-full h-full relative">
                <Image
                  alt="adnan"
                  src="/adnan.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-128">
          <div className="grid h-128 grid-cols-3">
            <div className="bg-red-900 opacity-90 col-span-2">
              <div className="container"></div>
            </div>
            <div className="bg-white"></div>
          </div>
        </div>

        <div className="relative h-128">
          <div className=" grid h-128 grid-cols-3">
            <div className="bg-yellow-300 opacity-90 col-span-2"></div>
            <div className="bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

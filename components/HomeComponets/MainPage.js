import Image from "next/image";
import React from "react";
import FormComponent from "../HomeComponets/FormComponent";
import Intro from "./Intro";

export default function MainPage() {
  return (
    <div className="randomBox h-auto w-full text-green-300">
      <div className="flex flex-col">
        <Intro />

        <div className="p-10">
          <div className="relative mt-4 mx-20  ">
            <h1 className="text-gray-900 font-mono text-2xl">My Strengths</h1>
          </div>

          <div className="relative">
            <div className="grid  md:grid-cols-3 p-0 m-0">
              <div className=" opacity-90 col-span-1">
                <div className="  grid place-items-center mx-10">
                  <div className="container  p-10">
                    <p className="text-red-700 font-mono text-2xl">Ambition</p>
                    <p className="mt-6 text-gray-900 font-mono font-thin text-sm">
                      I am passionate about what I do, and never do things
                      half-heartedly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="opacity-90 col-span-1">
                <div className=" grid place-items-center mx-10">
                  <div className="container  p-10">
                    <p className="text-red-700 font-mono text-2xl">Precision</p>
                    <p className="mt-6 text-gray-900 font-mono font-thin text-sm">
                      I believe it is pointless to do something if you are not
                      going to do it well.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="opacity-90 col-span-1">
                <div className="  grid place-items-center mx-10">
                  <div className="container  p-10">
                    <p className="text-red-700 font-mono text-2xl">Assertive</p>
                    <p className="mt-6 text-gray-900 font-mono font-thin text-sm">
                      I am not afraid to ask the difficult questions and have
                      the difficult conversations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative  items-start">
          <div className=" grid h-128 grid-cols-2 ">
            
            <div className=" opacity-90  grid place-content-center">
              <div className="container p-10 m-0">
                <p className="text-red-700 font-serif font-bold text-xl top-0">
                  Education
                </p>
                <div className="mt-10">
                  <p className="text-gray-900 font-serif font-normal text-3xl">
                    Port City Internation University
                  </p>
                  <p className="text-gray-700 font-serif font-light text-sm mt-5">
                    Computer Science {'&'} Engineering (2019 - 2023)
                  </p>
                </div>
                <div className="mt-10">
                  <p className="text-gray-900 font-serif font-normal text-3xl">
                    Hathazar Govt. College
                  </p>
                  <p className="text-gray-700 font-serif font-light text-sm mt-4">
                    Science (2015-2018)
                  </p>
                </div>
              </div>
            </div>
            

            <div className=" opacity-90 p-10  grid place-content-center">
              <div className="container p-10">
              <p className="text-red-700 font-serif font-bold text-xl top-0">
                  Awards
                </p>
                <div className="mt-10">
                  <p className="text-gray-900 font-serif font-normal text-3xl">
                    Idea contest {'&'} Poster presentation
                  </p>
                  <p className="text-gray-700 font-serif font-light text-sm mt-5">
                    Organized by UGC
                  </p>
                </div>
                <div className="mt-10">
                  <p className="text-gray-900 font-serif font-normal text-3xl">
                    Competitive Programming Contest
                  </p>
                  <p className="text-gray-700 font-serif font-light text-sm mt-4">
                    Arranged by PCIU, 3rd Position achived
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 relative  items-start">
          <div className=" grid h-128 md:grid-cols-2">
            <div className="hidden md:block opacity-90 p-10   place-content-center">
              <div className="container p-10">
                <p className="text-red-700 font-mono text-5xl">
                  Interested? Lets get in touch.
                </p>
              </div>
            </div>

            <div className="md:block opacity-90 md:p-10  grid place-content-center">
              <div className="container p-10">
              <p className="text-red-700 font-mono mb-5 text-1xl md:hidden">
                  Interested? Lets get in touch.
                </p>
                <FormComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

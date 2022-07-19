import Image from "next/image";
import React from "react";
import FormComponent from '../HomeComponets/FormComponent'

export default function MainPage() {
  return (
    <div className="randomBox h-auto w-full text-green-300">
      <div className="flex flex-col">
        <div className=" relative ">
          <div className=" grid  grid-cols-3">
            <div className=" opacity-90 col-span-2">
              <div className=" h-full grid place-items-center p-10">
                <div className="container h-full  p-10">
                  <p className="text-red-900 text-5xl  inline">
                    Julian Mack – Changing the world one headline at a time.
                  </p>
                  <p className="text-red-900 text-1xl mt-16">
                    I’m an investigative journalist with over two decades of
                    experience. I’ve covered both Milan’s fashion week and the
                    U.S. primaries in the same year. Above all, I believe that
                    fair and free press is fundamental to a healthy society –
                    the core ideal behind my work. I offer professional,
                    unbiased, and timely articles, along with cited sources, and
                    the highest regard for journalistic integrity you can find.
                  </p>

                  <button className="mt-10 bg-transparent  border border-gray-900 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded inline-flex justify-end items-center">
                    <span>Get in touch</span>
                  </button>
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


        <div className="p-10">
        <div className="relative mt-4 mx-20  ">
          <h1 className="text-gray-900 font-mono text-2xl">My Strengths</h1>
          </div>

        <div className="relative">
          <div className="grid  grid-cols-3 p-0 m-0">
            <div className=" opacity-90 col-span-1">
              <div className="  grid place-items-center mx-10">
              <div className="container  p-10">
                  <p className="text-red-700 font-mono text-2xl">Ambition</p>
                  <p className="mt-6 text-gray-900 font-mono font-thin text-sm">I am passionate about what I do, and never do things half-heartedly.</p>
                </div>
              </div>
            </div>
            <div className="opacity-90 col-span-1">
              <div className=" grid place-items-center mx-10">
                <div className="container  p-10">
                  <p className="text-red-700 font-mono text-2xl">Precision</p>
                  <p className="mt-6 text-gray-900 font-mono font-thin text-sm">I believe it is pointless to do something if you are not going to do it well. </p>
                </div>
              </div>
            </div>
            <div className="opacity-90 col-span-1">
              <div className="  grid place-items-center mx-10">
              <div className="container  p-10">
                  <p className="text-red-700 font-mono text-2xl">Assertive</p>
                  <p className="mt-6 text-gray-900 font-mono font-thin text-sm">I am not afraid to ask the difficult questions and have the difficult conversations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="bg-gray-100 relative  items-start">
          <div className=" grid h-128 grid-cols-2">

            <div className="opacity-90 p-10  grid place-content-center">
            <div className="container p-10">
                  <p className="text-red-700 font-mono text-5xl">Interested? Lets get in touch.</p>
                </div>
              </div>
           
              <div className=" opacity-90 p-10  grid place-content-center">
            <div className="container p-10">
              <FormComponent/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

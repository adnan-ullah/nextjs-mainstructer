import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    
         <div className=" relative ">
          <div className=" grid  grid-cols-3">
            <div className=" opacity-90 col-span-2 ">
              <div className=" h-full grid place-items-center p-10 ">
                <div className="container h-full  p-10">
                  <p className="text-red-900 text-5xl  inline">
                    Welcome to______________
                  </p>
                  <p className="text-red-900 text-1xl mt-16">
                    I’m a computer engineer with over one decades of
                    experience. And my aim is to be a specialist on computer vision. I lived in Hathazari , which is located in Chittagong.
                    And I am a full-stack developer with over 3 year expericence. My hobby is playing cricket, football, like some arcade game.
                    Also playing some E-sports like Efootball , Strategy game.
                  </p>

                  <button className="mt-10 bg-transparent  border border-gray-900 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded inline-flex justify-end items-center">
                    <span>Get in touch</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="block bg-white grid-cols-1">
              <div className="hidden w-full h-full relative md:block md:w-full">
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

   
  )
}

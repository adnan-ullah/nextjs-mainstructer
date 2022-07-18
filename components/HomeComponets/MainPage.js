import React from "react";

export default function MainPage() {
  return (
    <div className="randomBox h-full w-full text-green-300">
      <div className="grid grid-rows-3  grid-flow-col gap-4">
       
        <div className="h-128">
          <div className="grid h-128 grid-cols-3">
            <div className="bg-slate-300 opacity-90 col-span-2"></div>
            <div className="bg-white"></div>
          </div>
        </div>


        <div className="h-128">
          <div className="grid h-128 grid-cols-3">
            <div className="bg-red-900 opacity-90 col-span-2"></div>
            <div className="bg-white"></div>
          </div>
        </div>

        <div className="h-128">
          <div className="grid h-128 grid-cols-3">
            <div className="bg-yellow-300 opacity-90 col-span-2"></div>
            <div className="bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

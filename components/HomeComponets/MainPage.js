import React from "react";

export default function MainPage() {
  return (
    <div className="randomBox h-full w-full text-green-300">
      <div className="grid grid-rows-3  grid-flow-col gap-4">
        <div className="bg-white h-128">
          <div className="grid h-128 grid-cols-3">
            <div className="bg-slate-300 opacity-50 col-span-2"></div>
            <div className="bg-white"></div>
          </div>
        </div>
        <div className=" bg-green-300 h-128 ">02</div>
        <div className="bg-blue-300 h-128  ">03</div>
      </div>
    </div>
  );
}

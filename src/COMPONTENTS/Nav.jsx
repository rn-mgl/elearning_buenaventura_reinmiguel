import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="w-[80vw] left-2/4 -translate-x-2/4 top-0 absolute z-10 ">
      <div className="flex items-center justify-center p-5 gap-10">
        <Link
          to={"/"}
          className="text-transparent bg-clip-text bg-gradient-to-r from-pr-black to-gray-300 font-lexend
       text-4xl font-bold mr-auto"
        >
          study.
        </Link>
        <Link
          to={"/lesson"}
          className="border-pr-black border-[1px] cursor-pointer hover:scale-105 transition-all py-2 px-5 text-xl rounded-l-full rounded-r-full font-lexend text-pr-black"
        >
          lesson
        </Link>
        <Link
          to={"/test"}
          className="bg-pr-black cursor-pointer hover:scale-105 transition-all py-2 px-5 text-xl rounded-l-full rounded-r-full font-lexend text-white"
        >
          take test
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

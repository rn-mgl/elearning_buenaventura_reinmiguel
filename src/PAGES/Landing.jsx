import React from "react";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div>
      <div
        className="fixed bg-gradient-to-r from-pr-black to-dark-gray w-full h-full 
  font-poppins text-white flex items-center justify-center flex-col gap-5"
      >
        <div
          className="text-transparent bg-clip-text bg-gradient-to-r from-pr-orange to-pr-yellow font-lexend
     text-9xl font-bold"
        >
          study the study
        </div>
        <div className="text-lg">
          tips to study coding, from someone who does a lot of self studying - an eLearning special
        </div>
        <Link
          to={"/lesson"}
          className="bg-pr-orange cursor-pointer hover:scale-105 transition-all py-3 px-5 text-xl rounded-l-full rounded-r-full"
        >
          Proceed
        </Link>
      </div>
    </div>
  );
}

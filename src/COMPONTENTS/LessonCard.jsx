import React from "react";

export default function LessonCard(props) {
  return (
    <div
      className={`${props.position} flex flex-col items-center justify-center  gap-10 absolute transition-all ease-in-out`}
    >
      <div className="font-lexend text-6xl font-bold text-clip text-transparent bg-gradient-to-r from-pr-orange to-pr-yellow bg-clip-text">
        {props.id}. {props.main}
      </div>
      <div className="text-justify font-poppins indent-14 text-lg">{props.body}</div>
      <div className="text-justify font-poppins indent-14 text-lg">{props.takeaway}</div>
    </div>
  );
}

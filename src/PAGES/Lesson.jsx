import React from "react";
import LessonCard from "../COMPONTENTS/LessonCard";
import lesson from "../lessons";
import Nav from "../COMPONTENTS/Nav";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Lesson() {
  const [active, setActive] = React.useState(0);
  const handleIncrement = () => {
    setActive((prev) => (prev + 1 >= lesson.length ? 0 : prev + 1));
  };

  const handleDecrement = () => {
    setActive((prev) => (prev - 1 < 0 ? lesson.length - 1 : prev - 1));
  };

  return (
    <div>
      <Nav />
      <div className="w-9/12 h-[60%] text-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 overflow-hidden">
        {lesson.map((d, idx) => {
          let position = "translate-x-full opacity-0";
          if (active === idx) {
            position = "translate-x-0";
          }
          if (idx === active - 1 || (active === 0 && idx === lesson.length - 1)) {
            position = "-translate-x-full  opacity-0";
          }
          return (
            <LessonCard
              key={d.id}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              main={d.main}
              body={d.body}
              id={d.id}
              position={position}
              takeaway={d.takeaway}
            />
          );
        })}
      </div>
      <div className="flex left-2/4 bottom-32 z-10 -translate-x-2/4 -translate-y-2/4  absolute gap-20  items-center justify-center ">
        <AiOutlineLeft
          className="cursor-pointer scale-150 hover:text-pr-orange"
          onClick={handleDecrement}
        />
        <AiOutlineRight
          className="cursor-pointer scale-150 hover:text-pr-orange"
          onClick={handleIncrement}
        />
      </div>
    </div>
  );
}

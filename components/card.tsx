import { cn } from "@/lib/utils";
import { Bike, Shirt, User } from "lucide-react";
import React from "react";

type CardCompType = {
  name: String;
  branch: String;
  teamNumber: String;
  numOfPlays: String;
};

const CardComp = ({ name, branch, teamNumber, numOfPlays }: CardCompType) => {
  let backGround;
  switch (branch) {
    case "Football":
      backGround = "bg-green-500 p-1 rounded-md text-white px-2";
      break;
    default:
      backGround = "bg-red-500 p-1 rounded-md text-white px-2";
      break;
  }
  return (
    <div
      className="w-60 flex items-center justify-center h-24 px-3 border 
    border-cyan-500 rounded-lg mt-3 hover:bg-cyan-200 dark:hover:bg-cyan-900 cursor-pointer 
    transition-colors duration-200 ease-in-out"
    >
      <User className="text-blue-500 mr-4 " />
      <div className="w-full">
        <div className="flex justify-between mb-2">
          <div>{name}</div>
          <div className={cn("text-sm", backGround)}>{branch}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 text-[14px] items-center ">
            <Shirt className="text-slate-300 size-4  " /> {teamNumber}
          </div>
          <div className="flex gap-1 text-[14px] items-center">
            <Bike className="text-slate-300 size-4 " /> {numOfPlays}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComp;

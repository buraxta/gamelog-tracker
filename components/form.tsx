"use client";
import { createUser, updateUser } from "@/lib/actions";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { useState } from "react";

const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

interface FormProps {
  header: ReactNode;
  buttonText: String;
  user?: any;
}

const FormComp = ({ header, buttonText, user }: FormProps) => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    id: user?.id || "",
    name: user?.name || "",
    jersey: user?.teamNumber || "",
    plays: user?.numOfPlays || 0,
    sports: user?.branch || "",
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const handleJersey = (jerseyNumber: string) => {
    console.log("jersey clicked");
    setInputs((prev) => {
      return { ...prev, jersey: prev.jersey + jerseyNumber };
    });
  };

  const handleClear = () => {
    console.log("inside clear func");
    setInputs((prev) => {
      return {
        ...prev,
        jersey: "",
      };
    });
  };

  const handlePlays = (incDec: string) => {
    setInputs((prev) => {
      if (incDec === "dec") {
        if (prev.plays <= 0) {
          return { ...prev, plays: 0 };
        }
        return { ...prev, plays: prev.plays - 1 };
      } else {
        return { ...prev, plays: prev.plays + 1 };
      }
    });
  };

  const handleSports = (sport: string) => {
    setInputs((prev) => {
      return { ...prev, sports: sport };
    });
  };

  const handleAction = async () => {
    if (buttonText === "Update") {
      const updatedUser = await updateUser(inputs);
      router.push("/");
    } else if (buttonText === "Create") {
      const createdUser = await createUser(inputs);
      router.push("/");
    }
  };

  return (
    <div className="w-full max-w-screen-md">
      {header}
      <div className="flex flex-col w-4/5 mt-4">
        <label htmlFor="name" className="text-sm text-blue-700">
          Enter the player's name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={inputs.name}
          onChange={handleName}
          className="bg-slate-300/50 rounded-md p-1 w-full outline-none"
        />
      </div>
      <div className="flex flex-col w-4/5 mt-4">
        <label htmlFor="name" className="text-sm text-blue-700">
          Enter the player's jersey number
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-slate-300/50 rounded-md p-1 w-full outline-none"
          value={inputs.jersey}
        />
      </div>
      <div className="grid grid-cols-3 max-w-96 min-w-96 mt-5 ">
        {buttons.map((button) => (
          <button
            type="button"
            key={button}
            className="py-2 border border-slate-50 hover:bg-slate-50 dark:hover:bg-slate-800"
            onClick={() => handleJersey(button)}
          >
            {button}
          </button>
        ))}
        <button
          className="py-2 border border-slate-50 hover:bg-slate-50 dark:hover:bg-slate-800"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div className="flex flex-col w-4/5 mt-4">
        <label htmlFor="plays" className="text-sm text-blue-700">
          Enter total plays played by the player
        </label>
        <div className="mt-4 w-full flex ">
          <button
            className="bg-slate-300/50 py-1 px-3 rounded-lg"
            onClick={() => handlePlays("dec")}
          >
            -
          </button>
          <input
            type="text"
            name="plays"
            id="plays"
            disabled
            className="bg-white flex-1 text-center dark:bg-slate-600"
            value={inputs.plays}
          />
          <button
            className="bg-slate-300/50 py-1 px-3 rounded-lg"
            onClick={() => handlePlays("inc")}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col w-4/5 mt-4">
        <label htmlFor="plays" className="text-sm text-blue-700">
          Select the sport played
        </label>
        <div className="mt-4 w-full grid grid-cols-3 sm:grid-cols-5 gap-2 ">
          {[
            "Football",
            "Baseball",
            "Basketball",
            "Soccer",
            "Track & Field",
          ].map((field) => (
            <button
              key={field}
              className={`p-3 border border-slate-50 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg ${
                inputs.sports === field
                  ? "bg-slate-50 border border-cyan-500 dark:bg-slate-800"
                  : ""
              }`}
              onClick={() => handleSports(field)}
            >
              {field}
            </button>
          ))}
        </div>
        <button
          onClick={handleAction}
          className="p-3 mt-3 bg-gradient-to-r from-cyan-500 to-blue-300 hover:from-blue-300 hover:to-cyan-500  "
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default FormComp;

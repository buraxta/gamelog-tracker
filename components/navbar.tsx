import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const NavbarComp = () => {
  return (
    <div className="w-full border-b border-slate-300 flex justify-center">
      <div className="flex justify-between max-w-screen-md w-full  text-center  py-5 px-2 ">
        <Button asChild>
          <Link href={"/"}>
            <Home className="size-4 mr-2" />
            Home Page
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavbarComp;

"use client";
import { deleteUser } from "@/lib/actions";
import { Trash, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";

type HeaderProp = {
  title: string;
  subtitle: string;
  id: string;
};

const HeaderComp = ({ title, subtitle, id }: HeaderProp) => {
  const router = useRouter();
  const { toast } = useToast();
  return (
    <div className="flex justify-between ">
      <div className="pt-4">
        <h3 className="text-3xl font-extrabold">{title}</h3>
        <p className="font-light text-slate-400">{subtitle}</p>
      </div>
      {title === "Update Player" && (
        <Trash2
          onClick={() => {
            deleteUser(id);
            toast({
              variant: "destructive",
              title: "Deleted Succesfully",
            });
            router.push("/");
          }}
          className="mr-40 mt-6 bg-slate-200 size-8 p-1 rounded-xl hover:scale-110 cursor-pointer transition-all duration-100 hover:bg-red-100"
        />
      )}
    </div>
  );
};

export default HeaderComp;

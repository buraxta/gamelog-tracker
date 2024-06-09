"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const SearchComp = () => {
  const params = useSearchParams();
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchParam = new URLSearchParams();
    newSearchParam.set("query", e.target.value.trim());
    router.replace(`/?${newSearchParam.toString()}`);
  };

  return (
    <div className="flex border border-slate-400 w-full p-2 rounded-md relative">
      <Search className="text-slate-400 cursor-pointer" />
      <input
        type="text"
        className="outline-none flex-1 ml-2"
        onChange={handleSearch}
      />
      <p className="bg-blue-900 text-white absolute right-0 bottom-0 top-0 flex items-center justify-center px-3 cursor-pointer hover:bg-blue-900/95">
        <Link href={"/create"}>Add Player</Link>
      </p>
    </div>
  );
};

export default SearchComp;

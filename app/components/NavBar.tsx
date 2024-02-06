import React from "react";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]">
      <h1 className="hover:bg-orange-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
        Car Dekho.com
      </h1>
      <div className="hidden md:flex gap-5">
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Home
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          History
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Contact
        </h2>
      </div>
      <UserButton />
    </div>
  );
}

export default NavBar;

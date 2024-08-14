import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
function AdminNav() {
  return (
    <div className="relative">
      <div className="fixed w-[75%] h-full z-50 bg-gray-200">
        <div className="h-full w-full flex gap-2">
            
        </div>

      </div>
      <nav className="fixed  w-full px-3 py-4 flex items-center justify-between border border-b top-0">
        <div className="flex text-2xl gap-3 items-center">
          <RiMenu2Line />
          <IoSearchSharp />
        </div>
        <div className="flex items-center gap-3 ">
          <img
            src="data:image/png;base64,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"
            alt=""
            srcset=""
            className="w-11 rounded-full border"
          />
          <IoIosArrowDown className="text-2xl" />
        </div>
      </nav>
    </div>
  );
}

export default AdminNav;

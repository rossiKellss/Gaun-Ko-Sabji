import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function AdminSidePanel() {
  const menuLists = [
    {
      id: 1,
      icon: <FaPlusCircle className="text-2xl md:text-3xl text-gray-500" />,
      info: "Add items",
    },
    {
        id: 2,
        icon: <FaList className="text-2xl md:text-3xl text-gray-500" />,
        info: "View items",
      },

      {
        id: 3,
        icon: <FiShoppingCart className="text-2xl md:text-3xl text-gray-500" />,
        info: "View Orders",
      },
  ];
  return (
    <div className="">
      <div className="fixed left-0 h-[calc(100%-10%)] border-r w-[20%] md:w-[15%] lg:w-[10%] bottom-0 md:h-[calc(100%-13%)]  ">
        <div className="flex flex-col gap-2 ">
            {menuLists.map((value,index)=>{
                return(<div className=" w-full border-b flex  py-3  items-center justify-center flex-col gap-2" key={index}>
                    {value.icon}
                    <p className="hidden md:block">{value.info}</p>
                  </div>)
            })}
          
        </div>
      </div>
    </div>
  );
}

export default AdminSidePanel;

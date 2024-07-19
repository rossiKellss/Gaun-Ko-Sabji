import React from "react";
import Heading from "../components/SubComponent/HeadingTitle/Heading";
import Para from "../components/SubComponent/Paragraph/Para";


function Explore() {
  return (
    <div className="contentMargin">
      <Heading content={"Explore menus"} />

      <Para
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, incidunt a autem, sunt deleniti doloremque iure quaerat corporis praesentium possimus aliquam magni?"
        }
      />
      {/* menuss */}
      <div className="menu mt-3 md:mt-5 flex gap-2 md:gap-4 lg:gap-6 overflow-x-scroll">
        <div className="flex flex-col gap-1   items-center ">
          <div className="h-16 w-16 md:h-28 md:w-28 border rounded-full cursor-pointer ">
            <img
              src="https://media.istockphoto.com/id/589985234/photo/homegrown-tomatoes.webp?b=1&s=170667a&w=0&k=20&c=nSWpqUTLcVf46QyvmPTcL-Hxhk2Mmib-QJ5WYGKQVUc="
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <span className="font-semibold">
            <Para content={"Tomatoes"} />
          </span>
        </div>
      </div>
      <hr className="w-full mt-3 h-[4px] bg-gray-400 rounded-md" />
      
    </div>
  );
}

export default Explore;

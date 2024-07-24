import React from "react";
import Heading from "../components/SubComponent/HeadingTitle/Heading";
import Para from "../components/SubComponent/Paragraph/Para";
import Button from "../components/SubComponent/Button/Button";

function Hero() {
  return (
    <div className="w-full rounded-lg p-4 mt-28 md:mt-32 lg:mt-36 bg-gray-500 flex md:py-8 lg:py-14 lg:pt-16 lg:px-8 lg:h-[72vh]">
      <div className="md:w-[75%] space-y-1 md:space-y-2">
        <Heading content={"We provide best veges"} />
        <div className="flex flex-col gap-2 lg:gap-3 justify-start items-start">
          <Para />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Hero;

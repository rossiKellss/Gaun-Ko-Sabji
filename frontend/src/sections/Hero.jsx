import React from "react";
import Heading from "../components/SubComponent/HeadingTitle/Heading";
import Para from "../components/SubComponent/Paragraph/Para";
import Button from "../components/SubComponent/Button/Button";

function Hero() {
  return (
    <div className="w-full rounded-lg border-2">
      <Heading />
      <Para />
      <Button />
    </div>
  );
}

export default Hero;

import React from "react";
import { Slider } from "../../molecules/Slider/Slider";

export const Home = ({products}) => {
  return (
    <>
      <Slider products={products}/>
    </>
  );
};

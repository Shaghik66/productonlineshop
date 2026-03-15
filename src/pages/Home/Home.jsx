import React from "react";
import { Slider } from "../../components/molecules/Slider/Slider";

export const Home = ({products}) => {
  return (
    <>
      <Slider products={products}/>
    </>
  );
};

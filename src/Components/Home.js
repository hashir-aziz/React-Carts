import React from "react";
import { Hoddies } from "./Hoddies";
import Cart from "./Cart";

export const Home = ({ hoddies, addToCart }) => {
  return (
    <>
      <Hoddies hoddies={hoddies} addToCart={addToCart} />
    </>
  );
};

export default Home;

import React from "react";
import {Cart} from './Cart'

export const Hoddies = ({ hoddies ,addToCart }) => {
  return (
    <>
     <h1 className="Hoddies" hoddies={hoddies}>
      Hoddies({hoddies.length})
    </h1>
    <Cart hoddies={hoddies} addToCart={addToCart}/>
    </>
    

      
  );
  
};

export default Hoddies;

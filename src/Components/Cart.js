import React from "react";

export const Cart = ({ hoddies, addToCart }) => {
  return (
    <>
      <div className="cart_container">
        {hoddies.map((item, index) => (
            <div className="bigBoss" key={index}>
            <div className="imgBox">
              <img className="img" src={item.img} alt="" />
            </div>
            <div>
              <h4 className="name">{item.Name}</h4>
              <h3 className="price">{item.price}</h3>
              <button className="button" onClick={() => addToCart(item)}>
                Add In Cart
              </button>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default Cart;

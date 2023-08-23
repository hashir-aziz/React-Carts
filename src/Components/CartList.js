import React from 'react'
 

const CartList = ({cart,onDelete}) => {
    return (
        <>
          <div className="cart_container">
            {cart.map((cartitem, cartindex) => (
                <div className="bigBoss" key={cartindex}>
                <div className="imgBox">
                  <img className="img" src={cartitem.img} alt="" />
                </div>
                <div>
                  <h4 className="name">{cartitem.Name}</h4>
                  <h3 className="price">{cartitem.price}</h3>
                 <div className="button" onClick={()=>onDelete(cartitem.id)}>
                    Remove
                 </div>
                </div>
              </div>
            ))}
            ;
          </div>
        </>
      );
    };
    
export default CartList
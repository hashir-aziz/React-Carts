import logo from "./logo.svg";
import "./App.css";
import { Hoddies } from "./Components/Hoddies";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import img1 from "./images/Rectangle 8 (4).png";
import img2 from "./images/Rectangle 8 (5).png";
import img3 from "./images/Rectangle 8 (6).png";
import img4 from "./images/Rectangle 8 (7).png";
import { useState } from "react";
import CartList from "./Components/CartList";
import Cart from "./Components/Cart";
function App() {
  const hoddies = [
    {
      id: 1,
      Name: "Short hoody",
      img: img1,
      price: "7800$/-",
    },
    {
      id: 2,
      Name: "long hoody",
      img: img2,
      price: "400$/-",
    },
    {
      id: 3,
      Name: "halfSelives hoody",
      img: img3,
      price: "1200$/-",
    },
    {
      id: 4,
      Name: "long shir",
      img: img4,
      price: "1034$/-",
    },
    {
      id: 5,
      Name: "Short hoody",
      img: img1,
      price: "7800$/-",
    },
    {
      id: 6,
      Name: "long hoody",
      img: img2,
      price: "400$/-",
    },
    {
      id: 7,
      Name: "halfSelives hoody",
      img: img3,
      price: "1200$/-",
    },
    {
      id: 8,
      Name: "long shir",
      img: img4,
      price: "1034$/-",
    },
  ];
  const [cart, setCart] = useState([]);
  const addToCart = (data) => {
    console.log(data);
    setCart([...cart, data]);
  };
  const onDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home hoddies={hoddies} addToCart={addToCart} />}
        />
      </Routes>
      <h1>Carts{cart.length}</h1>
      <CartList cart={cart} onDelete={onDelete} />
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./components/Store";
import Cart from "./components/Cart";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleCartAdd = (item, amount) => {
    setCart([...cart, {item: item, amount: amount}]);
  }

  return (
      <BrowserRouter>

      <Navbar />

      <div className="side-padding">

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/store" element={<Store handleCartAdd={handleCartAdd} />} />

          <Route path="/cart" element={<Cart handleCartAdd={handleCartAdd} cart={cart} setCart={setCart} />} />

        </Routes>
      </div>
      </BrowserRouter>
  );
};

export default App;

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./components/Store";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import postList from "./StoreItems";
import NotFound from "./components/NotFound";

const App = () => {
  const [cart, setCart] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleCartAdd = (item, amount) => {
    setCart([...cart, {item: item, amount: amount}]);
  }

  useEffect(() => {
    const newPosts = postList.filter((post) => {
      return ((post.brand + post.model).toLowerCase()).includes(searchText.toLowerCase());
    })

    setFilteredPosts(newPosts);
  }, [searchText])
  
  return (
    <BrowserRouter>
      <Navbar searchText={searchText} setSearchText={setSearchText} />

      <div className="side-padding">

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/store" element={<Store handleCartAdd={handleCartAdd} posts={filteredPosts} />} />

          <Route path="/cart" element={<Cart handleCartAdd={handleCartAdd} cart={cart} setCart={setCart} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;

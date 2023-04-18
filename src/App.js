import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./components/ShopPage";

const App = () => {
  return (
    <>
    <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/ShopPage" Component={ShopPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

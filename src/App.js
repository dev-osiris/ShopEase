import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./components/Store";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/store" Component={Store} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

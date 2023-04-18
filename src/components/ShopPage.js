import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Profile from "../Profile";
import First from "./Home";


const ShopPage = () => {
  return (
    <div>this is ShopPage</div>
  );
}
// const ShopPage = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" Component={App} />
//         <Route path="/profile" Component={Profile} />
//         <Route path="/components/First" Component={First} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

export default ShopPage;
import React, { useState } from "react";
import dataList from "../StoreItems" ;

const Store = () => {
  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState("");

  return (
    <div className="side-padding">
      this is the Store
    </div>
  );
}

export default Store;
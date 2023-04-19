import React, { useState } from "react";
import dataList from "../StoreItems" ;
import DisplayItems from "./DisplayItems";

const Store = () => {
  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState("");

  function addItem(){
    console.log("added one item");
  }

  return (
    <div className="side-padding">
      <DisplayItems items={dataList} handleOnClick={addItem}/>
    </div>
  );
}

export default Store;
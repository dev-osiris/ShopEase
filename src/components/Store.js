import { useEffect, useState } from "react";
import dataList from "../StoreItems" ;
import Item from "./Item";

const Store = (props) => {
  const [itemList, setItemList] = useState(dataList);

  // return (
  //   <div className="side-padding">
  //     <DisplayItems items={itemLIst} handleCartAdd={props.handleCartAdd} />
  //   </div> 
  // );

  
  const itemCards = itemList.map((item, index) => (
      <Item key={item.image + index} product={item} handleCartAdd={props.handleCartAdd} />
    ));
    
    return <div className={"items-container"}>{itemCards}</div>;

}

export default Store;
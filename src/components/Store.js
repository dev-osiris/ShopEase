import dataList from "../StoreItems" ;
import Item from "./Item";

const Store = (props) => {

  const itemCards = dataList.map((item, index) => (
      <Item key={item.image + index} product={item} handleCartAdd={props.handleCartAdd} />
    ));
    
    return <div className={"store-container"}>{itemCards}</div>;

}

export default Store;
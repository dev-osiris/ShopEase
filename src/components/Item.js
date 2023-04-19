import React from "react";

function Item(props){
    return(
        <div className="item-card">
            {/* <img src={require(props.product.image)} /> */}
            {console.log(props.product.image)}
            <div>{props.product.brand}</div>
            <div>{props.product.model}</div>
            <div>{props.product.price}</div>
            <div className="add-item" onClick={props.Click}></div>
        </div>
    );
}

export default Item;
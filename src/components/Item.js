import React from "react";

function Item(props){
    return(
        <div className="item-card">
            <img className="image" src={require(`./images/${props.product.image}.png`)} />
            <div className="item-info">
                <div>{props.product.brand}</div>
                <div>{props.product.model}</div>
                <div>₹{props.product.price}</div>
                <div className="add-item" onClick={props.Click}>Add</div>
            </div>
        </div>
    );
}

export default Item;
import React, { useState } from "react";

function Item(props){
    const [num, setnum] = useState(0);

    function handleOnChange(){

    }

    return(
        <div className="item-card">
            <img className="image" src={require(`./images/${props.product.image}.jpg`)} />
            <div className="item-info">
                <div>{props.product.brand}</div>
                <div>{props.product.model}</div>
                <div>₹{props.product.price}</div>
                
                <label>
                    <input type="number" 
                        className="add-item"  
                        value={num}
                        max={5}
                        min={0}
                        onChange={e => setnum(e.target.value)}/>
                        
                    &nbsp;
                    <button className="add-to-cart-btn" onClick={props.Click}>Add to cart</button> 
                </label>
            </div>
        </div>
    );
}

export default Item;
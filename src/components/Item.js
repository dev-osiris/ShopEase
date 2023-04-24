import React, { useState } from "react";

const Item = (props) => {
    const [num, setnum] = useState(0);

    const handleOnClick = () => {

        if(num > 0){
            props.handleCartAdd(props.product, num);
        }
        setnum(0);
    }

    const content = (
        <div className="item-card">
            <img className="image" src={require(`./images/${props.product.image}.jpg`)} alt="laptop" />
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
                    <button className="add-to-cart-btn" onClick={handleOnClick}>Add to cart</button>
                </label>
            </div>
        </div>
    );

    return content;
}

export default Item;
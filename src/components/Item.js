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
        <div className="store-item-card">
            <img className="laptop-image" src={require(`./images/${props.product.image}.jpg`)} alt="laptop" />
            <div className="item-info">
                <div>{props.product.brand}</div>
                <div>{props.product.model}</div>
                <div>₹{props.product.price.toLocaleString("en-IN")}</div>
                
                <label>
                        <form>        
                            <select id="item-dropdown" onChange={(e) => setnum(e.target.value)}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </form>
                        
                    &nbsp;
                    <button className="add-to-cart-btn" onClick={handleOnClick}>Add to cart</button>
                </label>
            </div>
        </div>
    );

    return content;
}

export default Item;
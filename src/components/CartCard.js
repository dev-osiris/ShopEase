import { useState } from "react";

function Cart_Card(props){
    const [a, seta] = useState(0);

    const handleRemoveBtn = () => {
        let newCart = [...props.cart]; //remember to not make a copy of cart[] as it wouldn't trigger UI update.
        newCart.splice(props.index, 1); //remove one element at props.index
        props.setCart(newCart);
        seta(a + 1);
    }

    const content = (
        <div className="cart-card">
            <div>
                <img className="laptop-image" src={require(`./images/${props.single_card.item.image}.jpg`)} alt="laptop" />
                <div className="item-card-info" >
                    <div>{props.single_card.item.brand}</div>
                    <div>{props.single_card.item.model}</div>
                    <div>₹{props.single_card.item.price.toLocaleString("en-IN")}</div>
                    <div>Qty: {props.amount}</div>
                    <button 
                        className="add-to-cart-btn" 
                        onClick={handleRemoveBtn}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );

    return content;
}

export default Cart_Card;
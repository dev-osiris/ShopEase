import { useEffect, useState } from "react";

const CartInfo = (props) => {
    const [sum, setsum] = useState(0);

    useEffect(() => {
        let tempSum = 0;
        props.cart.map((cartItem) => {
            tempSum += (cartItem.item.price * cartItem.amount);
        })
        setsum(tempSum);
    })


    return (
        <div className="cart-info">
            <div>Total qty: {props.cart.length}</div>
            <div>Total Amount: {sum}</div>
        </div>
    );
}

export default CartInfo;
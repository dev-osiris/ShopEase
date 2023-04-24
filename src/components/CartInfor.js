import { useEffect, useState } from "react";

const CartInfo = (props) => {
    const [sum, setsum] = useState(0);
    const [qty, setqty] = useState(0);

    useEffect(() => {
        let tempSum = 0;
        let tempqty = 0;
        props.cart.forEach((cartItem) => {
            tempSum += cartItem.item.price * cartItem.amount;
            tempqty += Number(cartItem.amount);
        })

        setsum(tempSum);
        setqty(tempqty);
    }, [props.cart, qty])


    return (
        <div className="cart-info">
            <div>Products: {props.cart.length}</div>
            <div>Total qty: {qty}</div>
            <div>Total Amount: ₹{sum.toLocaleString("en-IN")}</div>
            <button className="checkout-btn">Checkout</button>
        </div>
    );
}

export default CartInfo;
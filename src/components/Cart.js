import CartCard from "./CartCard";

const Cart = (props) => {
    console.log("inside cart.js", props.cart);
    // console.log(props.cart);
    
    const content = (
        <div className="items-container" style={{padding: "0 10%"}}>
            {
                props.cart.map((card, index) => {
                    return(
                        <div key={card.item.image + index}>
                            <CartCard single_card={card} amount={card.amount} /> 
                        </div>
                    )
                })
            }
        </div>
    );

    return content;
}  

export default Cart;
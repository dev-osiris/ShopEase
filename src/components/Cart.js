import CartCard from "./CartCard";
import CartInfo from "./CartInfor";

const Cart = (props) => {
    let content;

    //cart is empty
    if(props.cart.length === 0){
        content = (
            <div><h2>Cart empty, add some items from store to see here.</h2></div>
        )
    }

    else{
        content = (
            <div>

                <div className="items-container" style={{padding: "0 10%"}}>
                <CartInfo cart={props.cart} />

                {
                    props.cart.map((card, index) => {
                        return(
                            <div key={card.item.image + index}>
                                <CartCard 
                                single_card={card} 
                                amount={card.amount} 
                                index={index}  
                                cart={props.cart} 
                                setCart={props.setCart} /> 
                            </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
    
    return content;
}  

export default Cart;
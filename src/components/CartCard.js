function Cart_Card(props){
    console.log("inside cart_card.js", props.amount);

    const content = (
        <div className="cart-card">
            <div>
                <img className="image" src={require(`./images/${props.single_card.item.image}.jpg`)} alt="laptop" />
                <div className="item-info">
                    <div>{props.single_card.item.brand}</div>
                    <div>{props.single_card.item.model}</div>
                    <div>{props.single_card.item.price}</div>
                    <div>{props.amount}</div>
                </div>
            </div>
        </div>
    );

    return content;
}

export default Cart_Card;
import React from "react";
import Item from "./Item";

function DisplayItems(props){
    return(
        props.items.map(item => {
            return(
                <Item product={item} Click={props.handleOnClick}/>
            )
        })
    )
}

export default DisplayItems;
import React from "react";
import Item from "./Item";

function DisplayItems(props){
    return(
        <div className="items-container">
            {
                props.items.map((item, index) => {
                    return(
                        <Item key={index} product={item} Click={props.handleOnClick} />
                    )
                })
            }
        </div>
    )
}

export default DisplayItems;
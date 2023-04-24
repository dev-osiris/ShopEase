import React from "react";
import Item from "./Item";

function DisplayItems(props){
    return(
        <div className="items-container">
            {
                props.items.map((item, index) => {
                    return(
                        <div key={item.image + index}>
                            <Item product={item} handleCartAdd={props.handleCartAdd} />
                        </div> 
                    )
                })
            } 
        </div>
    )
}

export default DisplayItems;
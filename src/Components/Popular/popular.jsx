import React from "react";
import "./popular.css"
import data_products from '../Assets/data'
import Items from "../Items/items";
const Popular = () => {
    return ( 
        <div className="popular"> 
        <h1>POPULAR IN WOMEN</h1>  
        <hr/>
        <div className="popular-items">
            {data_products.map((item,index) =>{
                return <Items key={index} id ={item.id} name={item.name} image={item.image} 
                new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>

        </div>
     );
}
 
export default Popular;
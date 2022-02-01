import React from "react";
import "./ItemDetail.css"
// Components
import ItemCount from "../ItemCount/ItemCount";
// Img
import fallback from "./../../../../img/products/fallbackjoystick.png"



const ItemDetail = ({item, addBasket, loading})=>{
    let img
    try{
        img = require(`./../../../../img/products/${item.name+item.id}.jpg`)
    } catch {
        img =  fallback
    }
    return(
        <div key={"Desc"+item.id} className="itemDetail" >
            <h3 className="descName">{item.name}</h3>
            <img src={img} alt={item.name} />
            <p><span className="tag">Género: </span>{item.type}</p>
            <p><span className="tag">Desarrolladora: </span>{item.developer}</p>
            <p><span className="tag">Plataforma: </span>{item.platform}</p>
            <p><span className="tag">Descripción: </span>{item.description}.</p>
            <p><span className="tag">Precio: </span>${item.price}</p>
            <p><span className="tag">Stock: </span>{item.stock}</p>
            {loading && <ItemCount item={item} addBasket={addBasket}/>}
        </div>
    )
}

export default ItemDetail
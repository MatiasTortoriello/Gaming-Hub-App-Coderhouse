import React from "react";
import "./Landing.css"

import ItemListContainer from "../ProductCard/ItemListContainer/ItemListContainer";

const greeting = "Bienvenidos a Gaming-Hub, el lugar donde comprar los mejores juegos al mejor precio!"
const siteDesc = "Seleccioná el juego desde la lista y agregalo al carrito"

const Landing = ({prodList})=>{
    return(
        <section className="mainLanding">
            <p>{greeting}</p>
            <p>{siteDesc}</p>
            <ItemListContainer prodList={prodList}/>
        </section>
    )
}

export default Landing
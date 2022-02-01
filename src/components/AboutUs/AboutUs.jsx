import React from "react";
import { useEffect, useState } from "react";
import "./AboutUs.css"

// Img
import gaming from "./../../img/aboutUs/gaming.jpg"
//Libraries
import AOS from "aos";
import 'aos/dist/aos.css';

const AboutUs = ()=>{
    const [loading, setLoading] = useState(false)
    const loadingEffect = ()=>{
        AOS.init({
            duration : 2000
        });
        setLoading(true)
    }
    useEffect(() => {
        const load =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(loadingEffect())
            }, 2000)
        });
        load.then()
    }, []);
    return(
        <section className="aboutUsSection">
            <h2 className="aboutUsMainTitle">Sobre Nosotros</h2>
            {loading && <article className="aboutArticle" >
                <div className="holder" >
                    <h3 className="aboutUsTitles">Gaming Hub</h3>
                    <div className="articleDiv" >
                        <img src={gaming} className="aboutUsImg" data-aos="fade-left" alt="Gaming Library" />
                        <p className="aboutUsDescription" data-aos="flip-right">Somos un emprendimiento de gamers de la vieja escuela que piensa que adquirir el juego en físico tiene un encanto particular que no se percibe en la compra de juegos de manera digital. Queremos que nuestros clientes puedan tener su estantería con videojuegos al igual que un ávido lector tiene su biblioteca llena de libros.</p>
                    </div>
                </div>
            </article>}

        </section>
    )
}

export default AboutUs
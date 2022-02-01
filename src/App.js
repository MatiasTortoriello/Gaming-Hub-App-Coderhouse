import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import './App.css';
import NavBar from './components/bases/NavBar/NavBar';
import Footer from './components/bases/Footer/Footer';
import Landing from './components/Landing/Landing';
import Cart from './components/Cart/Cart';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import ItemDetailContainer from './components/ProductCard/ItemComponents/ItemDetailContainer/ItemDetailContainer';
import Category from './components/Category/Category';
//Libraries
import Swal from 'sweetalert2';


//Lista de productos
const prodList = [
  {name:"Assassins Creed Odyssey", id:"001", type:"RPG", price:"60", stock:"32", description:"Elige tu destino en Assassin's Creed® Odyssey. Pasa de la marginación a la gloria embarcándote en una odisea para descubrir los secretos de tu pasado y cambiar el destino de la antigua Grecia.",},
  {name:"Age Of Empires IV", id:"002", type:"Estrategia", price:"30", stock:"28", description:"Uno de los juegos de estrategia en tiempo real más queridos vuelve a demostrar todo su esplendor con Age of Empires IV, donde serás la estrella de las épicas batallas históricas que moldearon el mundo que hoy conocemos.",},
  {name:"Call of Duty WWII", id:"003", type:"Acción", price:"50", stock:"15", description:"Call of Duty regresa a sus raíces con Call of Duty: WWII, una experiencia sobrecogedora que redefine la Segunda Guerra Mundial para toda una nueva generación de jugadores.",},
  {name:"Dark Souls III", id:"004", type:"RPG", price:"30", stock:"18", description:"Dark Souls continúa redefiniendo los límites con el nuevo y ambicioso capítulo de esta serie revolucionaria, tan aclamada por la crítica. ¡Prepárate para sumergirte en la oscuridad!",},
  {name:"Dragon Age Inquisition", id:"005", type:"RPG", price:"30", stock:"27", description:"En la batalla por salvar Thedas, todas las decisiones importan. Crea a tu héroe, elige sus habilidades y reúne a un equipo para erradicar el mal del reino.",},
  {name:"Fallout IV", id:"006", type:"RPG", price:"40", stock:"15", description:"Bethesda Game Studios, el galardonado creador de Fallout 3 y The Elder Scrolls V: Skyrim, os da la bienvenida al mundo de Fallout 4, su juego más ambicioso hasta la fecha y la siguiente generación de mundos abiertos.",},
  {name:"Grand Theft Auto V", id:"007", type:"Acción", price:"30", stock:"22", description:"Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.",},
  {name:"Mass Effect Andromeda", id:"008", type:"RPG", price:"50", stock:"24", description:"Mass Effect™: Andromeda te lleva a la galaxia de Andrómeda, más allá de la Vía Láctea. Allí, encabezarás la lucha por un nuevo hogar en territorio hostil como pionero o pionera, liderando un grupo de exploradores con instrucción militar. Escribe el próximo capítulo en la historia de la humanidad: de tus decisiones dependerá su supervivencia.",},
  {name:"Metal Gear Solid V The Phantom Pain", id:"009", type:"Acción", price:"60", stock:"11", description:"METAL GEAR SOLID V: The Phantom Pain marca la entrada de la franquicia en una nueva era gracias a la innovadora tecnología de Fox Engine y ofrece a los jugadores una experiencia de juego de máximo nivel y libertad táctica para llevar a cabo misiones en mundo abierto.",},
  {name:"Red Dead Redemption II", id:"010", type:"Acción", price:"70", stock:"10", description:"América, 1899. Arthur Morgan y la banda de Van der Linde son forajidos en busca y captura. Mientras los agentes federales y los mejores cazarrecompensas de la nación les pisan los talones, la banda deberá abrirse camino por el abrupto territorio del corazón de América y sobrevivir a base de robos y peleas. Arthur deberá elegir entre sus propios ideales y la lealtad a la banda que lo vio crecer.",},
  {name:"The Witcher III The Wild Hunt", id:"011", type:"RPG", price:"40", stock:"7", description:"The Witcher: Wild Hunt es un RPG de mundo abierto basado en la narrativa y ambientado en un universo de fantasía visualmente impresionante, repleto de decisiones significativas y consecuencias trascendentales. En The Witcher, te pones en la piel del cazador de monstruos profesional Geralt de Rivia, y tienes la tarea de encontrar a la niña de la profecía en un vasto mundo abierto repleto de ciudades de mercaderes, islas piratas, peligrosos pasos de montaña y cuevas olvidadas para explorar.",},
  {name:"XCOM 2", id:"012", type:"Estrategia", price:"30", stock:"9", description:"La Tierra ha cambiado. Han pasado veinte años desde que los líderes mundiales se rindieran incondicionalmente ante las fuerzas alienígenas. XCOM, la última defensa del planeta, acabó destrozada y dispersa. Ahora, en XCOM 2, los alienígenas dominan la Tierra y construyen resplandecientes ciudades que prometen un futuro brillante para la humanidad mientras esconden siniestros planes y eliminan a todos los opositores a su nuevo orden.",},
]

function App() {
  //Productos
  const [products, setProducts] = useState(prodList)
  //Canasta
  const [basket, setBasket] = useState([])
  //Funcion que agrega productos a la canasta
  const addBasket = (item, quantity)=>{
    const exist = products.find(x => x === item)
    const alreadyBasket = basket.find(x =>x.item === item)
    if(alreadyBasket){
      Swal.fire(
        'Ese producto ya se encuentra en su canasta',
        'Para modificarlo vaya a su canasta por favor',
        'error'
      )
    } else if(exist){
      let tempBasket = basket
      tempBasket.push({item: item, quantity: quantity})
      setBasket(tempBasket)
      Swal.fire({
        title: `Felicitaciones`,
        text: `Se ha agregado ${quantity} unidad/es de ${item.name} a su canasta.`,
        width: 600,
        padding: '3em',
        color: '#8A2BE2',
        backdrop: `
            rgba(138,43,226,0.4)
        `
    })
    }
  }
  const buyBasket = (bskt, total)=>{
    let basketCount = bskt.length
    if(basketCount<1){
      Swal.fire(
        'Error',
        'Necesita agregar productos a su canasta para comprar.',
        'error'
      )
    } else {
      let tempProducts = products
      tempProducts.forEach(x=>{
        bskt.forEach(y=>{
          if(y.item.code === x.code){
            x.stock-=y.quantity
          }
        })
      })
      Swal.fire(
        'Gracias por comprar',
        `Ha comprado ${basketCount} productos distintos por un total de $${total}`,
        'success'
      )
      setBasket([])
      setProducts(tempProducts)
    }
  }
  //Funcion que remueve productos de la canasta
  const removeBasket = (basketItem)=>{
    const alreadyBasket = basket.find(x =>x === basketItem)
    if(alreadyBasket){
      let index = basket.indexOf(basketItem)
      let tempBasket = basket
      tempBasket.splice(index, 1)
      setBasket(tempBasket)
    }
  }
  return (
      <BrowserRouter>
        <NavBar size={basket.length}/>
        <Routes>
          <Route path="/" exact element={<Landing prodList={products}/>}/>
          <Route path="/canasta" element={<Cart basket={basket} removeBasket={removeBasket} buyBasket={buyBasket}/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer prodList={products} addBasket={addBasket}/>}/>
          <Route path="/category/:type" element={<Category prodList={products} addBasket={addBasket}/>}/>
          <Route path="/nosotros" element={<AboutUs/>}/>
          <Route path="/contacto" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
  );
}

export default App;

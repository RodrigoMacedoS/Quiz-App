import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Temos os melhores destinos</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore a cachoeira escondida dentro da Floresta Amazônica"
              label="Aventura"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Viaje nas ilhas de Bali em um cruzeiro privado"
              label="Luxo"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Navegue no Oceano Atlântico visitando águas desconhecidas"
              label="Mistério"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Jogue futebol em ilhas do Caribe"
              label="Aventura"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ande de camelo no deserto do Saara"
              label="Adrenalina"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

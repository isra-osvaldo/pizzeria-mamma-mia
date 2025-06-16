import CardPizza from "./CardPizza"
import { pizzas } from "../data/pizzas"

const Cards = () => {
  return (
    <section className="cards-section">
      { pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          desc={pizza.desc}
          img={pizza.img}
        />
      )) }
    </section>
  )
}

export default Cards
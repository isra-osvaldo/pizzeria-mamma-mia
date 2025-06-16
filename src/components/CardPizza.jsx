import { formatNumberCL } from "../helpers/formatNumber"
import { icons } from "../data/ingredient-icons"
import { capitalizeWords } from "../helpers/capitalizeWords"


const CardPizza = ({ name, price, ingredients, img }) => {
    const priceFormat = formatNumberCL(price)
    const nameCapitalized = capitalizeWords(name)
    return (
        <article className="card">
            <img 
                src= { img } 
                alt= { name } />
                <div className="card-body">
                    <div className="title">
                        <h4>Pizza { nameCapitalized } </h4>
                    </div>
                    <div className="ingredients-box">
                        <p className="ingredients-title">Ingredientes:</p>
                        <ul className="list-unstyled">
                            { ingredients.map((ingredient, index) => {
                              const key = ingredient.toLowerCase().replace(/\s+/g, '_')
                              const icon = icons[key] || '🍕' 
                            
                            return (
                                <li key={index}
                                    className="border rounded px-2 py-1 mb-1 ingredients "
                                >
                                  <span className="me-1">{icon}</span> 
                                  { capitalizeWords(ingredient) }
                                </li>
                            )})}
                        </ul>
                    </div>  
                    <div className="buy">
                        <h4>Precio: ${ priceFormat }</h4>
                        <div className="buttons-buy">
                            <button className="btn btn-outline-dark">Ver más 👀</button>
                            <button className="btn btn-dark">Añadir <i className="bi bi-cart-fill"></i></button>
                        </div>
                    </div>
                </div>
        </article>
  )
}

export default CardPizza
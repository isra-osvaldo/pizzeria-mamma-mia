import { formatNumberCL } from "../helpers/formatNumber"


const CardPizza = ({ name, price, ingredients, img }) => {

    const priceFormat = formatNumberCL(price)
    const ingredientsToString = ingredients.join(", ")

    return (
        <article className="card">
            <img 
                src= { img } 
                alt= { name } />
                <div className="card-body">
                    <div className="title">
                        <h4>Pizza { name } </h4>
                    </div>
                    <div className="ingredients-box">
                        <p className="ingredients-title">Ingredientes:</p>
                        <p className="ingredients">🍕 { ingredientsToString }</p>
                    </div>  
                    <div className="buy">
                        <h4>Precio: ${ priceFormat }</h4>
                        <div className="buttons-buy">
                            <button className="btn btn-ver-mas">Ver más 👀</button>
                            <button className="btn btn-añadir">Añadir <i className="bi bi-cart-fill"></i></button>
                        </div>
                    </div>
                </div>
        </article>
  )
}

export default CardPizza
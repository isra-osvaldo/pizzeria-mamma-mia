
const CardPizza = () => {
  return (
    <article className="card">
        <img 
            src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" 
            alt="Pizza Napolitana" />
            <div className="card-body">
                <div className="title">
                    <h4>Pizza Napolitana</h4>
                </div>
                <div className="ingredients-box">
                    <p className="ingredients-title">Ingredientes:</p>
                    <p className="ingredients">🍕 mozzarella, tomates, jamón, orégano</p>
                </div>  
                <div className="buy">
                    <h4>Precio: $5.950</h4>
                    <div className="buttons-buy">
                        <button className="btn btn-ver-mas">Ver más 👀</button>
                        <button className="btn btn-añadir">Añadir 🛒</button>
                    </div>
                </div>
            </div>
    </article>
  )
}

export default CardPizza
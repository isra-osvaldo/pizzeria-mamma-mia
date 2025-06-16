import { pizzaCart } from "../data/pizzas"
import { capitalizeWords } from "../helpers/capitalizeWords"

export default function Cart() {
  return (
    <section className="container my-5">
      <h4 className="text-center mb-4">Detalles del pedido:</h4>
      <div className="mx-auto">
        <div className="item-list d-flex flex-column gap-3 mb-5">

          {pizzaCart.map((pizza) => (
            <div 
              className="d-flex flex-column flex-md-row justify-content-between align-items-center border p-3 gap-3 flex-wrap" 
              key={pizza.id}
            >
              <div className="d-flex gap-2 align-items-center"> 
                <img 
                  src={pizza.img} 
                  alt="pizza" 
                  className="img-small" 
                />
                <p className="mb-0 fw-semibold">{capitalizeWords(pizza.name)}</p>
              </div>
              
              <div className="d-flex gap-3 align-items-center flex-wrap text-nowrap">
                <p className="mb-0 fw-semibold">${pizza.price}</p>
                <button className="btn btn-outline-danger py-1">-</button>
                <span>1</span>
                <button className="btn btn-outline-primary py-1">+</button>
              </div>

            </div>
            
          ))}
        </div>
      </div>

    </section>
  )
}

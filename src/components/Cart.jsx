import { useState } from "react"
import { pizzaCart } from "../data/pizzas"
import { formatNumberCL } from "../helpers/formatNumber"

export default function Cart() {

  const [cart, setCart] = useState(pizzaCart)

  const aumentarCantidad = (id) => {
    const updateCart = cart.map(pizza => 
      pizza.id === id ? {...pizza, count: pizza.count + 1} : pizza
    )
    setCart(updateCart)
    console.log(updateCart)
  }

  const disminuirCantidad = (id) => {
    const updateCart = cart
      .map(pizza => 
        pizza.id === id ? {...pizza, count: pizza.count - 1} : pizza
      )
      .filter(pizza => pizza.count > 0)
      setCart(updateCart)
  }

  const total = cart.reduce((acc, pizza) => acc + (pizza.price * pizza.count), 0)


  return (
    <section className="container my-5">
      <h4 className="text-center mb-4">Detalles del pedido:</h4>
      <div className="mx-auto">
        <div className="item-list d-flex flex-column gap-3 mb-5">

          {cart.map((pizza) => (
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
                <p className="mb-0 fw-semibold text-capitalize">{ pizza.name }</p>
              </div>
              
              <div className="d-flex gap-3 align-items-center flex-wrap text-nowrap">
                <p className="mb-0 fw-semibold">${formatNumberCL(pizza.price)}</p>
                <button 
                  className="btn btn-outline-danger py-1 btn-thick-border fw-semibold"
                  onClick={() => disminuirCantidad(pizza.id)}
                  >
                  -
                </button>
                <span className="fw-semibold">{pizza.count}</span>
                <button 
                  className="btn btn-outline-primary py-1 btn-thick-border fw-semibold"
                  onClick={() => aumentarCantidad(pizza.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {cart.length > 0 && (
            <div className="d-flex flex-column gap-3 mt-3 w-25">
              <span className="fs-3 fw-semibold text-nowrap">Total: ${formatNumberCL(total)}</span>
              <button className="btn btn-dark btn-pay">Pagar</button>
            </div>
          )}
        </div>
      </div>

    </section>
  )
}

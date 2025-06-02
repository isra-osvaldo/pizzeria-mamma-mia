import ButtonNavbar from "./ButtonNavbar"

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
    <nav className="navbar">
      <div className="left">
        <p>Pizzería Mamma Mía!</p>
        <button className="btn">🍕 Home</button>
        <button className="btn">{ token ? "🔓 Profile" : "🔐 Login" }</button>
        <button className="btn">{ token ? "🔓 Logout" : "🔐 Register" }</button>
      </div>

      <button className="btn btn-total"><span>🛒</span>Total: ${ total }</button>
    </nav>
  )
}

export default Navbar
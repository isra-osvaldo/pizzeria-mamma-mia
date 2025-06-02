import ButtonNavbar from "./ButtonNavbar"

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
    <nav className="navbar">
      <div className="left">
        <p>Pizzería Mamma Mía!</p>
        <ButtonNavbar icon="🍕" text="Home" />
        <ButtonNavbar icon="🔐" text="Login" />
        <ButtonNavbar icon="🔐" text="Register" />
      </div>

      <button className="btn btn-total"><span>🛒</span>Total: ${ total }</button>
    </nav>
  )
}

export default Navbar
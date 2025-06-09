import { Button } from "react-bootstrap";
import { formatNumberCL } from "../helpers/formatNumber";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand fs-6" href="#">
          Pizzería Mamma Mía!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-center gap-2 w-100">
            <Button variant="outline-light" className="fs-smaller px-2 py-1">🍕 Home</Button>
            { 
                !token ? (
                <>
                  <Button variant="outline-light" className="fs-smaller px-2 py-1">🔓 Profile</Button>
                  <Button variant="outline-light" className="fs-smaller px-2 py-1">🔐 Login</Button>
                </>
                ) : (
                  <>
                    <Button variant="outline-light" className="fs-smaller px-2 py-1">🔓 Logout</Button>
                    <Button variant="outline-light" className="fs-smaller px-2 py-1">🔐 Register</Button>
                  </>
              )
            }
            
            <li className="nav-item ms-auto">
              <a className="btn btn-outline-total-color  px-2 py-1 fs-smaller" href="#">
                <span className="fs-smaller">🛒 Total: ${formatNumberCL(total)}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

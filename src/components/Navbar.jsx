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
            <li className="nav-item">
              <a className="btn btn-outline-white px-2 py-1 fs-smaller" aria-current="page" href="#">
                🍕 Home
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-white px-2 py-1 fs-smaller" href="#">
                {token ? "🔓 Profile" : "🔐 Login"}
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-white px-2 py-1 fs-smaller" href="#">
                {token ? "🔓 Logout" : "🔐 Register"}
              </a>
            </li>
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

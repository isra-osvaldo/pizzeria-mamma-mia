import { formatNumberCL } from "../helpers/formatNumber";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand fs-6" href="#">
          Pizzería Mamma Mía!
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav d-flex justify-content-center gap-2 w-100">
            <li class="nav-item">
              <a class="btn btn-outline-white px-2 py-1 fs-smaller" aria-current="page" href="#">
                🍕 Home
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-white px-2 py-1 fs-smaller" href="#">
                {token ? "🔓 Profile" : "🔐 Login"}
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-white px-2 py-1 fs-smaller" href="#">
                {token ? "🔓 Logout" : "🔐 Register"}
              </a>
            </li>
            <li class="nav-item ms-auto">
              <a class="btn btn-outline-total-color  px-2 py-1 fs-smaller" href="#">
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

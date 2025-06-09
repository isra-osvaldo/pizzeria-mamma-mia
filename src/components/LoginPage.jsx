import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    contrasena: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false);
    setSuccess(false);
    setMessage("");
  };

  const validarDatos = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.contrasena) {
      setError(true);
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (formData.contrasena.length < 6) {
      setError(true);
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setError(false);
    setSuccess(true);
    setMessage("Registro exitoso. Bienvenido!");
    setFormData({
      email: "",
      contrasena: "",
    });

    console.log("Datos enviados:", formData);
  };

  return (
    <section className="fondo-imagen">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100">
          <form
            className="mx-auto borde-gris rounded px-5 py-4 m-5 text-white appointment-form"
            style={{ maxWidth: "500px", width: "80%" }}
            onSubmit={validarDatos}
          >
            <div className="header-login">
              <h3 className="text-center mt-4 text-uppercase fs-2">Login</h3>
            </div>
            <div className="mt-4 mb-3">
              <input
                value={formData.email}
                name="email"
                type="email"
                placeholder="Email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                value={formData.contrasena}
                name="contrasena"
                placeholder="Password"
                type="password"
                className="form-control"
                id="contrasena"
                onChange={handleChange}
              />
            </div>

            {message && (
              <p
                className={`text-center p-2 rounded mt-5 text-white ${
                  error ? "bg-danger" : success ? "bg-success" : ""
                }`}
              >
                {message}
              </p>
            )}

            <div className="text-center mt-4 mb-4">
              <button type="submit" className="btn btn-light">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

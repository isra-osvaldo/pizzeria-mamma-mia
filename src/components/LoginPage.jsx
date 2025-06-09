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
    <div className="container">
      <div className="row">
        <form className="mx-auto" onSubmit={validarDatos}>
          <h3 className="text-center mt-4">Login</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              value={formData.email}
              name="email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
            <input
              value={formData.contrasena}
              name="contrasena"
              type="password"
              className="form-control"
              id="contrasena"
              onChange={handleChange}
            />
          </div>

          {message && (
            <p className={`text-center ${error ? "text-danger" : success ? "text-success" : ""}`}>
              {message}
            </p>
          )}

          <div className="text-center mt-4 mb-4">
            <button type="submit" className="btn btn-dark">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

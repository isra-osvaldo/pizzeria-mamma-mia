import { useState } from "react";

export default function RegisterPage() {

  const [formData, setFormData] = useState({
    email: "",
    contrasena: "",
    confirmContrasena: ""
  })

  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const validarDatos = (e) => {
    e.preventDefault()

    if ( !formData.email || !formData.contrasena || !formData.confirmContrasena ) {
      setError(true)
      setErrorMsg("Todos los campos son obligatorios.")
      return
    }

    if (formData.contrasena.length < 6) {
      setError(true)
      setErrorMsg("La contraseña debe tener al menos 6 caracteres.")
      return
    }

    if (formData.contrasena !== formData.confirmContrasena) {
      setError(true)
      setErrorMsg("La contraseña y la confirmación no coinciden.")
      return
    }

    setError(false)
    setErrorMsg("")
    setFormData({
      email: "",
      contrasena: "",
      confirmContrasena: ""
    })

    console.log("Datos enviados:", formData);
    
  }

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
      setError(false)
  }

  return (
    <div className="container">
      <div className="row">
        <form 
          className="mx-auto px-5 py-4 m-5 rounded" 
          style={{ maxWidth: "500px", width: "100%", border: "1px solid #ccc" }}
          onSubmit={ validarDatos }>
          <h3 className="text-center mt-4">Formulario de Registro</h3>
          <div className="mt-5 mb-3">
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

          <div className="mb-3">
            <label htmlFor="confirmContrasena" className="form-label">
              Confirmar Contraseña
            </label>
            <input
              value={formData.confirmContrasena}
              name="confirmContrasena"
              type="password"
              className="form-control"
              id="confirmContrasena"
              onChange={handleChange}
            />
          </div>

          { error && <p className="text-danger text-center">{errorMsg}</p> }

          <div className="text-center mt-4 mb-4">
            <button type="submit" className="btn btn-dark">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

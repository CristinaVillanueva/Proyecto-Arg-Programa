//components/LoginForm.js (Formulario de Inicio de Sesión)

import React, { useState } from 'react';
import '../componentes/Estilos/Login_form.css'

const LoginForm = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar datos al backend para la autenticación
  };
  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Correo electrónico"
        className="form-input"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Contraseña"
        className="form-input"
      />
      <button type="submit" className="form-button">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;


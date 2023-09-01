
// components/RegistrationForm.js (Formulario de Registro)

import React, { useState } from 'react';
import './Estilos/Registration_form.css'

const RegistrationForm = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar datos al backend para el registro
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
    <form className="registration-form" onSubmit={handleSubmit} >
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Nombre de usuario"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Correo electrónico"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Contraseña"
      />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegistrationForm;


// Crear una Nueva Tarea (NewTaskForm.js)

import React, { useState } from 'react';
import '../componentes/Estilos/New_task_form.css'

const NewTaskForm = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar los datos al backend para crear una nueva tarea
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={taskData.title}
        onChange={handleChange}
        placeholder="Título de la tarea"
      />
      <textarea
        name="description"
        value={taskData.description}
        onChange={handleChange}
        placeholder="Descripción de la tarea"
      />
      <button type="submit">Crear Tarea</button>
    </form>
  );
};

export default NewTaskForm;


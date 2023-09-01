// Editar una Tarea Existente (EditTaskForm.js)

import React, { useState } from 'react';

const EditTaskForm = ({ task }) => {
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar los datos editados al backend para actualizar la tarea
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={editedTask.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={editedTask.description}
        onChange={handleChange}
      />
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default EditTaskForm;


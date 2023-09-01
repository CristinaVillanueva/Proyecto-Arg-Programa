// components/TaskItem.js (Elemento de Tarea)
// Marcar una Tarea como Completada (TaskItem.js)
// Eliminar una Tarea (TaskItem.js)

import React from 'react';

const TaskItem = ({ task }) => {
  const handleDelete = () => {
    // Enviar solicitud al backend para eliminar la tarea
  };
  return (
    <div className={task.completed ? 'completed' : ''}>
      <h3>{task.title}</h3>
      <button>Editar</button>
      <button onClick={handleDelete}>Eliminar</button>
      {!task.completed && <button>Completar</button>}
    </div>
  );
};

export default TaskItem;



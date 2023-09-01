// components/TaskList.js (Lista de Tareas)
// Filtrar y Ordenar Tareas (TaskList.js)

import React, { useState } from 'react';
import TaskItem from './Task_item';
import '../componentes/Estilos/Task_list.css'

const TaskList = () => {
  const [filter, setFilter] = useState('');
  const tasks = [
    // ...
  ];
  const filteredTasks = tasks.filter((task) =>
    filter === '' || task.completed === (filter === 'completed')
  );
  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => setFilter('')}>Todas</button>
        <button onClick={() => setFilter('completed')}>Completadas</button>
        <button onClick={() => setFilter('incomplete')}>Incompletas</button>
      </div>
      <div className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      </div>
    </div>
  );
};

export default TaskList;


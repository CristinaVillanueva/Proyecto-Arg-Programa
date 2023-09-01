import Header from '../componentes/Header'
import TaskList from '../componentes/Task_list'
import NewTask from '../componentes/New_task_form'

//Página de tareas donde se pueden agregar, editar y marcar las tareas completadas
const Tarea = () => {
    return (
        <div>
            <Header />
                <h2>Página de tareas</h2>
            <NewTask />
            <TaskList />
        </div>
    )
}
export default Tarea;

//falta task_item y edit_task_form por errores que no pudimos resolver
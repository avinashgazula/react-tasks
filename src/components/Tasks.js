import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => {
                return <Task onDelete={onDelete} onToggle={onToggle} key={task.id} task={task}></Task>
            })}
        </>
    )
}

export default Tasks

import Task from "./Task"

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => {
                return <Task key={task.id} task={task}></Task>
            })}
        </>
    )
}

export default Tasks
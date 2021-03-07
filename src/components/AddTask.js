import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [name, setName] = useState('')
    const [day, setDay] = useState('')
    const [important, setImportant] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('Add a Task to submit')
        }
        onAdd({ name, day, important })
        setName('')
        setDay('')
        setImportant(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Date and Time</label>
                <input type="text" placeholder="Add Date and Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Important</label>
                <input type="checkbox" checked={important} value={important} onChange={(e) => setImportant(e.target.checked)} />
            </div>
            <input type="submit" value="Add Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask

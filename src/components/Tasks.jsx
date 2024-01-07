import React, { useContext } from 'react'
import { TaskContext } from './context/TaskContext'

const Tasks = () => {

    const { tasks, deleteTask, reminderToggle } = useContext(TaskContext)
    // console.log(tasks)

    const handleToggle = (id) => {
        reminderToggle(id)
        toastr.warning('You updated set reminder for this task')
    }

    const handleDelete = (id) => {
        deleteTask(id)
        toastr.info('Task deleted')
    }

    return (
        <>
            {tasks.length > 0 ? <div style={{ 
                margin: '5px',
                fontSize: '15px'
             }}>
                <i>Double click to update reminder</i>
            </div> : ''}
            {tasks.length > 0 ? tasks.map(task => {
                return <div onDoubleClick={() => handleToggle(task.id)} key={task.id} className={`task ${task.reminder ? 'reminder' : ''}`}>
                    <h4>{task.text} <i onClick={() => handleDelete(task.id)} style={{ color: 'red', cursor: 'pointer' }}>x</i> </h4>
                    <p> {task.day} </p>
                </div>
            }) : 'No tasks have been created.'}
        </>
    )
}

export default Tasks
import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from './context/TaskContext'

const AddTask = () => {

    const {addNewTask} = useContext(TaskContext)

    const [task,setTask] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault()

        if(!task) {
            toastr.error('Add task field is required')
            return;
        }

        const tasks = {text: task,day,reminder}

        addNewTask(tasks)

        toastr.success('New task added to task list')

        setTask('')
        setDay('')
        setReminder(false)
    }

  return (
    <form onSubmit={handleSubmit} className='add-form'>
        <div className="form-control">
            <label htmlFor="">
                Add Task
            </label>
            <input value={task} onChange={(e)=> setTask(e.target.value)} type="text" placeholder='Add Task' />
        </div>
        <div className="form-control">
            <label htmlFor="">
                Day & Time
            </label>
            <input value={day} onChange={(e)=> setDay(e.target.value)} type="text" placeholder='Set day & time' />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="">
                Set Reminder
            </label>
            <input checked={reminder} value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} type="checkbox" />
        </div>

        <button style={{ 
            backgroundColor: 'steelblue'
        }} className="btn btn-block">Save</button>

    </form>
  )
}

export default AddTask
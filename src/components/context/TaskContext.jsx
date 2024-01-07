import { createContext, useContext, useReducer, useState } from "react"


const initialState = {
    tasks: [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 22:30pm',
            reminder: true
          },
          {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 1:00pm',
            reminder: true
          },
          {
            id: 3,
            text: 'Food shopping',
            day: 'Feb 7th at 2:30pm',
            reminder: false
          }
    ]
}

// creating context 

export const TaskContext = createContext(initialState)

// creating context provider

export const TaskContextProvider = ({children}) => {

    const taskReducer = (state,action)=> {
        switch (action.type) {
            case "DELETE":
                return {
                    ...state, tasks: state.tasks.filter(task => task.id !== action.id )
                }
                break;
            
            case "ADD":
                return {
                    ...state, tasks: [action.newTasks, ...state.tasks]
                }
                break;
            case "REMINDER_TOOGLE":
                return {
                    tasks: state.tasks.map(task => task.id === action.id ? {
                        ...task ,reminder: !task.reminder
                    } : task)
                }
                break;
            default:
                return state
                break;
        }
    }


    const [taskState,taskDispatcher] = useReducer(taskReducer,initialState)

    const deleteTask = (id) => {
        taskDispatcher({
            type: "DELETE",
            id
        })
    }

    const addNewTask = (addTask)=> {
        const id = crypto.randomUUID()
        const newTasks = {id, ...addTask}
        taskDispatcher({
            type: "ADD",
            newTasks
        })
    }

    const reminderToggle = (id)=> {
        taskDispatcher({
            type: "REMINDER_TOOGLE",
            id
        })
    }

    const show = {
        toShow: false
    }

    const showReducerMethod = (state,action) => {
        switch (action.type) {
            case "toggle":
                return {...state, toShow: !show.toShow}
                break;
        
            default:
                break;
        }
    }

    return (
        <TaskContext.Provider value={{ 
            tasks: taskState.tasks,
            addNewTask,
            deleteTask,
            reminderToggle,
            
         }} >
            {children}
        </TaskContext.Provider>
    )

}
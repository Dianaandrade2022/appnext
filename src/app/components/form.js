import { useState } from "react"
export default function Form({newtask}){
    const [task, setTask] = useState('')
    const handlesubmit = (event) =>{
        event.preventDefault();
        newtask(task);
        localStorage.setItem('task',task)
        setTask('')
    }
    return(
       <div>
         <form onSubmit={handlesubmit}>
            <input className="uk-input uk-margin-top" type="text" placeholder="ingresa una nueva tarea" 
            value={task}
            onChange={(e)=> setTask(e.target.value)}/>
            <button className="uk-button uk-button-primary uk-margin">Enviar</button>
        </form>
       </div>
    )
}
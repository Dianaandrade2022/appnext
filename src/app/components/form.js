import { useState } from "react"
export default function Form(props){
    const [task, setTask] = useState('')
    const handlesubmit = (event) =>{
        event.preventDefault();
        props.newtask(task)
        localStorage.setItem('task',task)
        setTask('')
    }
    return(
       <div>
         <form onSubmit={handlesubmit}>
            <input className="uk-input" type="text" placeholder="ingresa una nueva tarea" 
            value={task}
            onChange={(e)=> setTask(e.target.value)}/>
            <button className="uk-button uk-button-primary">Enviar</button>
        </form>
       </div>
    )
}
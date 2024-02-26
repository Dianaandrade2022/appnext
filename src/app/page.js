"use client";
import { useEffect, useState } from "react";
import Form from "./components/form";
export default function Home() {
  const [taskitem, setTaskitem] = useState([])
  const dayjs = require('dayjs')
  dayjs().format()
  const fecha = dayjs();
  const fechaFormateada = fecha.format('DD-MM-YYYY');
  const fechaNacimiento = dayjs('2002-06-11');
  const edad = dayjs().diff(fechaNacimiento, 'year');


  function addtask(taskName) {
    if (!taskitem.find(res => res.name === taskName) ) {
      setTaskitem([...taskitem,{name:taskName, done:false, fechacreacion:fechaFormateada}])
    }
    }
  

  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.18.3/dist/css/uikit.min.css" />
      </head>
      <Form
      newtask = {addtask}
      />
      {/* <input value={text} type="text" onChange={handleChange} /> */}
      
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.18.3/dist/js/uikit.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.18.3/dist/js/uikit-icons.min.js"></script>
      {/* <button onClick={addtask}>Agregar</button> */}
      <div>
      <table className="uk-table uk-table-divider" >
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Fecha de creación</th>
          </tr>
        </thead>
        <tbody>
        {taskitem.map((res, index) => (
              <tr key={index}>
                <td>{res.name}</td>
                <td>{res.fechacreacion}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      <div className="uk-margin-top">
      <h5>calculo de edad</h5>
      <p>{edad}</p>

      </div>
    </div>
  );
}

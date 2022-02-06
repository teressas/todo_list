import React, { useState } from 'react'
import App from '../App';

export const DisplayForm = (props) => {


    // updates the checkbox; allows the user to check and uncheck the box
    const isBoxChecked = (idx) => {
        props.updateTask(idx);        
    }
    

    const removeTask = (idx) => {
        props.deleteTask(idx);
    }

    return (
        <fieldset>
            <legend>
                <h1>List of Items:</h1>
                <span>{props.taskList.map((task, idx )=> {
                    return <div key={idx} > 
                    <input type="checkbox" checked={task.completed} onChange={e => isBoxChecked(idx)}/>
                    <p style ={{textDecoration: task.completed ? "line-through" : ""}}
                
                    >{task.name}</p>
                    <br/>
                    <button style={{backgroundColor: "#4CAF50"}} onClick={e => removeTask(idx)} >Delete</button>
                    </div>
                })}
                </span>
            </legend>
        </fieldset>   
    )
}

export default DisplayForm


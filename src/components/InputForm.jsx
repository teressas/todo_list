import React, { useState } from 'react';


export const InputForm = (props) => {

    const [taskInput, setTaskInput] = useState("");

    const createTask = (e) => {
        e.preventDefault();
        props.addTask(taskInput);
        setTaskInput("");
       
    }
    return (
         <div>
            {/* {JSON.stringify(taskList)}<br/> */}
            <fieldset>
                <form onSubmit={createTask}>
                    <label>Task: </label> 
                        <input type="text" name="task" onChange={ (e) => setTaskInput(e.target.value) } value={taskInput}/>
                    <button>Add</button>
                </form>
            </fieldset>
        </div>
    )
}

export default InputForm
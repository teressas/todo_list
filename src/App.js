import './App.css';
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import DisplayForm from './components/DisplayForm';

function App() {

  const [taskList, setTaskList] = useState([]);

  const addTask = (taskInput) => {
    if(!taskInput) {
      return ""
    } else {
    console.log(taskInput);
    const copyTasks = [...taskList];
    copyTasks.push({name: taskInput, completed:false});
    console.log(copyTasks.taskInput);
    setTaskList(copyTasks);
    }
  };    

  // make a copy of the taskList array and call it copyTasks 
  // if array[i].completed is false then 
  // make the index of copyTasks.completed equal to true
  // set copyTasks array to TaskList
  // otherwise if array[i].completed is true, set it to false
  const updateTask = (idx) => {
    const copyTasks = [...taskList];
    // copyTasks[idx].completed = true
    // setTaskList(copyTasks);
    // console.log(copyTasks);
    if(copyTasks[idx].completed === false) {
      copyTasks[idx].completed = true;
      setTaskList(copyTasks);
      console.log(copyTasks);
    } else {
      copyTasks[idx].completed = false;
      setTaskList(copyTasks);
      console.log(copyTasks);
    }
    
  }
  
  const deleteTask = (delidx) => {
    const copyTasks = [...taskList];
    const filteredList = copyTasks.filter((copyTasks, idx) => {
      return idx !== delidx;
    });
    console.log(filteredList);
    setTaskList(filteredList);
  };    

  return (
    <div className="App">
      <h1>To Do List</h1>
      <InputForm addTask={addTask}/>
      <DisplayForm taskList={taskList} updateTask={updateTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;

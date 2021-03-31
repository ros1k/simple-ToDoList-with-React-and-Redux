import React from 'react'
import AddTask from './AddTask/AddTask'
import TaskList from './TaskList/TaskList'

import './App.scss';

function App() {
  return (
    <div className="App">
        <AddTask/>
        <TaskList showCurrentTaskList={false} listName="Current tasks:"/>
        <TaskList showCurrentTaskList={true} listName="Finished tasks:"/> 
    </div>
  );
}

export default App;

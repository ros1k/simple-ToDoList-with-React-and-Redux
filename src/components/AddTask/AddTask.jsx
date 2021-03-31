import React,{useEffect} from 'react'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addCurrentTask } from '../../store/actions/currentTasksActions'
import { addTask } from '../../store/actions/taskActions'

import style from './AddTask.module.scss'


const AddTask = () =>{
   const [newTask, setNewTask] = useState('')
   const [assignID,setAssignID] = useState()
   const [isTaskImportant,setIsTaskImportant] = useState(false);
   const tasks = useSelector(state => state.tasks)
   const dispatch = useDispatch()
   const handleNewTaskInput = (e) =>{
      setNewTask(e.target.value)
   }

   const handleImportantChange = (e) =>{
      setIsTaskImportant(prev=> !prev)
   }
   const handleAddNewTaskButton = (e) =>{
      e.preventDefault();
      const addNewTask = {
         task: newTask,
         isImportant: isTaskImportant,
         isDone: false,
      }
      const LastTask = tasks.slice(-1)[0];
      if(newTask.length > 1){
         if(LastTask && LastTask.task === newTask){
            if(window.confirm("This task already exist. Would you like to add it anyway?")){
               dispatch(addTask(addNewTask))
               setNewTask('')
         
            }
         }else{
            dispatch(addTask(addNewTask))
            setNewTask('')
         
         }
      } 

      }
  
   return (
      <div className={style.addTask}>
            <p>
               <input type="text" onChange={handleNewTaskInput} value={newTask} placeholder="New Task..."/>
                       
            </p>
            
            <p><input onChange={handleImportantChange} type="checkbox"/> is important?</p>
            <button className={style.addnewTaskButton} onClick={handleAddNewTaskButton}>Add new task</button>
         </div>
   );
}

export default AddTask;
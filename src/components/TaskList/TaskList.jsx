import React,{useState,useEffect} from 'react'

import {useSelector} from 'react-redux'
import Task from '../Task/Task'

const TaskList = ({listName,showCurrentTaskList}) =>{
   const tasks = useSelector(state => state.tasks);

   
   const post = useSelector(state =>
      state.tasks.find(element => showCurrentTaskList === element.isDone)
    )
   
   console.log(post);
 

{/* return (<Task key={element.id} i={index} {...element} />) */}

   return (
      <>
         
            <div className="tasks">
               <h2>{listName}</h2>
               <ul className="tasksList" >
                   {/* {currentTaskList} */}
   
               </ul> 
            </div>
          
            
      </>
         );
}

export default TaskList;
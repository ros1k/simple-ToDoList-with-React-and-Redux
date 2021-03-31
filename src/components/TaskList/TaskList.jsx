import React,{useState,useEffect} from 'react'

import {useSelector} from 'react-redux'
import Task from '../Task/Task'

const TaskList = ({listName,showCurrentTaskList}) =>{
   const tasks = useSelector(state => state.tasks);

   

   
   const currentTaskList = tasks.map((element,index) => {
      if(showCurrentTaskList === element.isDone){
     
         return (<Task key={element.id} i={1}{...element} />)
      }

    
   })
 

{/* return (<Task key={element.id} i={index} {...element} />) */}

   return (
      <>
         
            <div className="tasks">
               <h2>{listName}</h2>
               <ul className="tasksList" >
                   {currentTaskList}
               
               </ul> 
            </div>
          
            
      </>
         );
}

export default TaskList;
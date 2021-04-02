import React,{useState,useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import {useDispatch} from 'react-redux'
import {changeTaskStatus,deleteTask} from '../../store/actions/taskActions'
import style from './Task.module.scss'

const Task = ({id,task,isImportant,isDone,i}) =>{
   const dispatch = useDispatch()
   const [isTaskDone, setIsTaskDone] = useState(isDone)
   
   const handleTaskDone = () =>{
      setIsTaskDone(prev => !prev)
      
   }
   const handleTaskDelete = () =>{
      dispatch(deleteTask(id))
   }

   
   useEffect(() => {
      const newStatus = {
         id:id,
         isDone: isTaskDone
      }
      dispatch(changeTaskStatus(newStatus))
   }, [isTaskDone])


   const variants = {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
        },
      },
      hidden: { opacity: 0,x: -20 },
      exit:{opacity:0}
    }

    console.log(isImportant);
   return (
         <AnimatePresence>
            <motion.li
             initial="hidden"
             animate="visible"
             custom={i}
             variants={variants}
             exit={{opacity:0}}
             className={style.task}
            >
               <span className={style.taskName}>
                  {isDone
                     ? <input className={isImportant?"important":null} type="checkbox" name="taskDone" id="taskDone" checked disabled/>
                     : <input className={isImportant?"important":null} type="checkbox" name="taskDone" id="taskDone" disabled/>
                     }
                  
                  {task}
               </span>
               <div className={style.buttonsWrapper}>
               <button onClick={handleTaskDone}>Done</button>
               <button onClick={handleTaskDelete}>Delete</button>
               </div>
             
            </motion.li>
         </AnimatePresence>
   );
}

export default Task;
import uuid from 'uuid';

export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const DELETE_TASK = 'DELETE_TASK';


export const addTask = ({task,isImportant,isDone}) =>({
      type:ADD_TASK,
      payload:{
         id: uuid.v4(),
         task,
         isImportant,
         isDone,
      }

   })
   
export const editTask = ({id,task,isImportant,isDone}) => ({  // ({data})
      type:EDIT_TASK,
      payload: {
         //...data
         id,
         task,
         isImportant,
         isDone,
      }
   })
export const changeTaskStatus = ({id,isDone}) => ({
      type:CHANGE_TASK_STATUS,
      payload:{
         id,
         isDone,
      }
   })
export const deleteTask = id =>({
      type:DELETE_TASK,
      payload:{
         id,
      }
   })
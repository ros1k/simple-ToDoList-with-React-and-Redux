export const ADD_CURRENT_TASK = 'ADD_CURRENT_TASK';
export const DELETE_CURRENT_TASK = 'DELETE_CURRENT_TASK';


export const addCurrentTask = id =>({
      type:ADD_CURRENT_TASK,
      payload:{
         id     
      }
   })
   
export const deleteCurrentTask = id =>({
      type:DELETE_CURRENT_TASK,
      payload:{
         id,
      }
   })
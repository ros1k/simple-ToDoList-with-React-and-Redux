export const ADD_FINISHED_TASK = 'ADD_FINISHED_TASK';
export const DELETE_FINISHED_TASK = 'DELETE_FINISHED_TASK';


export const addFinishedTask = id =>({
      type:ADD_FINISHED_TASK,
      payload:{
        id   
      }
   })
   
export const deleteFinishedTask = id =>({
      type:DELETE_FINISHED_TASK,
      payload:{
         id,
      }
   })
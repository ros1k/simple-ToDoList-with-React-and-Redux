import {
   ADD_FINISHED_TASK,DELETE_FINISHED_TASK
} from '../actions/finishedTasksActions'

export const finishedTasksReducer = (state = [], action) =>{
   switch(action.type){
      case ADD_FINISHED_TASK:
         return [...state, action.payload];
      case DELETE_FINISHED_TASK:
         return state.filter(currentStateList => currentStateList.id !== action.payload.id);
      default:
         console.warn(`Nie mamy akcji typu: ${action.type}`)
         return state;
   }
 
}
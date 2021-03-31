import {
   ADD_CURRENT_TASK,DELETE_CURRENT_TASK
} from '../actions/currentTasksActions'

export const currentTasksReducer = (state = [], action) =>{
   switch(action.type){
      case ADD_CURRENT_TASK:
         return [...state, action.payload];
      case DELETE_CURRENT_TASK:
         return state.filter(currentStateList => currentStateList.id !== action.payload.id);
      default:
         console.warn(`Nie mamy akcji typu: ${action.type}`)
         return state;
   }
 
}
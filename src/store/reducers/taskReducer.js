import {
   ADD_TASK,EDIT_TASK,CHANGE_TASK_STATUS,DELETE_TASK
} from '../actions/taskActions'


export const taskReducer = (state = [], action) =>{
   switch(action.type){
      case ADD_TASK:
         return [...state, action.payload];
      case EDIT_TASK:
         return state.map(currentList =>{
            if(currentList.id !== action.payload.id){
               return currentList 
            }
            return ({
               id: currentList.id,
               task: action.payload.task,
               isImportant: action.payload.isImportant,
               isDone: action.payload.isDone
              
            })
         });
      case CHANGE_TASK_STATUS:
         return state.map(currentList =>{
            if(currentList.id !== action.payload.id){
            
               return currentList 
            }
        
            // console.log(currentList.id," | ",action.payload.id);
            // console.info("current state: ",currentList.isDone," new state: ",action.payload.isDone)
            return ({
               id: currentList.id,
               task: currentList.task,
               isImportant: currentList.isImportant,
               isDone: action.payload.isDone
              
            })
         });
      case DELETE_TASK:
         return state.filter(currentStateList => currentStateList.id !== action.payload.id);
      default:
         console.warn(`Nie mamy akcji typu: ${action.type}`)
         return state;
   }
 
}
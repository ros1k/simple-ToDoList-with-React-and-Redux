import { combineReducers } from 'redux'
import { taskReducer } from './taskReducer'
import { currentTasksReducer} from './currentTasksReducer'
import { finishedTasksReducer} from './finishedTasksReducer'


export const rootReducer = combineReducers({
   tasks: taskReducer,
   currentTasksReducer,
   finishedTasksReducer,
})
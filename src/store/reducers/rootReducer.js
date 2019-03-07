import { combineReducers } from 'redux'
import navigationLogReducer from './navigationLogReducer'

const rootReducer = combineReducers({
  navigationLog: navigationLogReducer
})

export default rootReducer
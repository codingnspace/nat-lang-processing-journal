import { combineReducers } from 'redux'
import spreadReducer from './spreadReducer'

export default combineReducers({
    spreads: spreadReducer
})
import { combineReducers } from 'redux'
import {connectRouter} from 'connected-react-router'
import authReducer from '../ducks/auth'
import history from '../hisotry'

export default combineReducers({
    auth: authReducer,
    router: connectRouter(history)
})

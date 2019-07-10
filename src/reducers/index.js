import userReducer from './reducer.user';
import {combineReducers} from 'redux';

export default combineReducers({
    UsernameReducer : userReducer,
})
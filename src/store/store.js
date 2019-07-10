import combineReducer from '../reducers';
import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(combineReducer,applyMiddleware(thunk,logger));
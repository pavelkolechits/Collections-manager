import { mainReducer } from './reducers/mainReducer';   
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { getNewsWatcher } from './Saga/getUsers';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({ mainReducer }), composeEnhancers(applyMiddleware(sagaMiddleware)));



sagaMiddleware.run(getNewsWatcher)
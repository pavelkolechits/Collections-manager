import { mainReducer } from './reducers/mainReducer';   
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcher } from './Saga/mainSaga';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({ mainReducer }), composeEnhancers(applyMiddleware(sagaMiddleware)));



sagaMiddleware.run(watcher)
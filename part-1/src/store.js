import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import firstReducer from "./redux/reducers/firstReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from "./redux/sagas/saga";

const saga = createSagaMiddleware();

const store = createStore(firstReducer, composeWithDevTools(applyMiddleware(saga)));

//start all sagas ans should be after applyMiddleware
saga.run(rootSaga)

export default store

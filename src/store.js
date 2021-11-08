import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import { getTodo } from './reducer/todoReducer'

const allReducers = combineReducers({
    userReducers: getTodo
})

const middleware = [thunk];

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
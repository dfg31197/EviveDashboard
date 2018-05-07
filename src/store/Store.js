import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/Reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

export default createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redusers/rootreducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(),
    // other store enhancers if any
);

export default store;

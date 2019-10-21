import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { counter } from './reducers';
// import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    counter,
    // composeWithDevTools(applyMiddleware(thunk))
    applyMiddleware(thunk)
)

export default store
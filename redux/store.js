import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from './reducer'
import { initialState } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

// export default store;

export const makeStore = () => store

export const wrapper = createWrapper(makeStore);
export default wrapper;
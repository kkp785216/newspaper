import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from './reducer'
import { initialState } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            category: action.payload.category,
            config: action.payload.config
        }
        return nextState
    } else {
        return reducer(state, action);
    }
}

const store = createStore(
    masterReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

// export default store;

export const makeStore = () => store

export const wrapper = createWrapper(makeStore);
export default wrapper;
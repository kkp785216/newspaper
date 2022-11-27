import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from './reducer'
import { initialState } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        typeof window !== "undefined" && console.log({ state, action })
        const nextState = {
            ...state,
            articles: action.payload.articles,
            featured: action.payload.featured,
            trending: action.payload.trending,
            most_popular: action.payload.most_popular,
            category: action.payload.category,
            config: action.payload.config,
            mega_menu_parent: { ...state.mega_menu_parent, ...action.payload.mega_menu_parent },
            mega_menu_category: { ...state.mega_menu_category, ...action.payload.mega_menu_category },
            mega_menu_sub_category: { ...state.mega_menu_sub_category, ...action.payload.mega_menu_sub_category },
            footer_editor_choice: action.payload.footer_editor_choice,
            footer_most_popular: action.payload.footer_most_popular,
        }
        return nextState
    } else {
        return reducer(state, action);
    }
}

const store = createStore(
    // reducer,
    masterReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
);

export const makeStore = () => store

export const wrapper = createWrapper(makeStore);
export default wrapper;
import { category } from "../lib/category"
import action from "./action"

export const preload = (dispatch) => {
    dispatch(action({
        type: 'CATEGORY',
        category: category
    }));
}
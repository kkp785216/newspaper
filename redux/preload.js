import action from "./action";

export const preload = (dispatch) => {
    dispatch(action({
        type: 'CATEGORY',
    }));

    dispatch(action({
        type: 'CONFIG',
    }));
}
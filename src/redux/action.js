import { post } from "../lib/post";

const action = (action) => {
    const {type, payload} = action;
    return (dispatch) => {
        switch (type) {
            case 'Hello':
                dispatch({
                    type: 'Hello',
                    payload: {
                        name: "Krishna"
                    }
                });
                break;

            case 'ARTICLES_LOCAL':
                dispatch({
                    type: 'ARTICLES_LOCAL',
                    payload: post.concat().splice(0,8*payload.page)
                });
                break;

            default:
                break;
        }
    }
}

export default action
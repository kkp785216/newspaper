import { post } from "../lib/post";

const action = (action) => {
    return async (dispatch) => {
        switch (action.type) {
            case 'Hello':
                dispatch({
                    type: 'Hello',
                    payload: {
                        name: "Krishna"
                    }
                });
                break;

            case 'ARTICLES_LOCAL':
                console.log(action.page)
                dispatch({
                    type: 'ARTICLES_LOCAL',
                    payload: {
                        articles: post.concat().reverse().splice((action.page - 1) * 8, 8).reverse(),
                        total_articles: post.length
                    }
                });
                break;

            default:
                break;
        }
    }
}

export default action
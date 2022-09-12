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
                dispatch({
                    type: 'ARTICLES_LOCAL',
                    payload: {
                        articles: post.concat().reverse().splice((action.page - 1) * 8, 8).reverse(),
                        total_articles: post.length,
                        page: action.page
                    }
                });
                break;

            case 'FEATURED':
                const featured = post.filter(e=>e.sub_category.includes('featured'))
                dispatch({
                    type: 'FEATURED',
                    payload: {
                        articles: featured,
                        total_articles: featured.length,
                        page: action.page
                    }
                });
                break;

            default:
                break;
        }
    }
}

export default action
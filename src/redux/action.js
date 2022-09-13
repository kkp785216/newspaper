import { post } from "../lib/post";

const action = (action) => {

    return async (dispatch) => {
        switch (action.type) {
            case 'CATEGORY':
                dispatch({
                    type: 'CATEGORY',
                    payload: {category: action.category}
                });
                break;

            case 'CONFIG':
                dispatch({
                    type: 'CONFIG',
                    payload: {config: action.config}
                });
                break;

            case 'ARTICLES_LOCAL':
                const articles = post.concat().reverse().splice((action.page - 1) * 8, 8).reverse();
                setTimeout(() => {
                    dispatch({
                        type: 'ARTICLES_LOCAL',
                        payload: {
                            articles: articles.map(e => ({ ...e, page: action.page })),
                            total_articles: post.length,
                            page: action.page
                        }
                    });
                }, 1000);
                break;

            case 'ARTICLE_CURRENT_PAGE':
                dispatch({
                    type: 'ARTICLE_CURRENT_PAGE',
                    payload: { page: action.page }
                });
                break;

            case 'FEATURED':
                const featured = post.concat().filter(e => e.sub_category.includes('featured')).splice((action.page - 1) * 5, 5);
                setTimeout(() => {
                    dispatch({
                        type: 'FEATURED',
                        payload: {
                            articles: featured.sort((a, b) => b.views - a.views).map(e => ({ ...e, page: action.page })),
                            total_articles: post.filter(e => e.sub_category.includes('featured')).length,
                            page: action.page,
                        }
                    });
                }, 1000);
                break;

            case 'FEATURED_CURRENT_PAGE':
                dispatch({
                    type: 'FEATURED_CURRENT_PAGE',
                    payload: { page: action.page }
                });
                break;

            default:
                break;
        }
    }
}

export default action
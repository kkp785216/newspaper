import { post } from "../lib/post";

const action = (action) => {

    return async (dispatch) => {
        switch (action.type) {
            case 'CATEGORY':
                dispatch({
                    type: 'CATEGORY',
                    payload: { category: action.category }
                });
                break;

            case 'CONFIG':
                dispatch({
                    type: 'CONFIG',
                    payload: { config: action.config }
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
                const featured = post.concat().filter(e => e.sub_category.includes('featured')).sort((a, b) => b.views - a.views).splice((action.page - 1) * 5, 5);
                setTimeout(() => {
                    dispatch({
                        type: 'FEATURED',
                        payload: {
                            articles: featured.map(e => ({ ...e, page: action.page })),
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

            case 'MEGA_MENU_PARENT':
                // console.log(post.filter(e=> e.parent_category === action.url || e.category === action.url))
                dispatch({
                    type: 'MEGA_MENU_PARENT',
                    payload: {
                        articles: action.category_type === 'parent' ? post.filter(e=> e.parent_category === action.url || e.category === action.url).sort((a, b) => b.views - a.views).splice((action.page - 1) * 4, 4) : post.filter(e=> e.category === action.url).sort((a, b) => b.views - a.views).splice((action.page - 1) * 4, 4),
                        category_type: action.category_type,
                        url: action.url,
                    }
                });
                break;

            default:
                break;
        }
    }
}

export default action
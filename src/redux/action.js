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

            case 'TRENDING':
                const trending = post.concat().filter(e => e.sub_category.includes('trending')).sort((a, b) => b.views - a.views).splice((action.page - 1) * 10, 10);
                setTimeout(() => {
                    dispatch({
                        type: 'TRENDING',
                        payload: {
                            articles: trending.map(e => ({ ...e, page: action.page })),
                            total_articles: post.filter(e => e.sub_category.includes('trending')).length,
                            page: action.page,
                        }
                    });
                }, 1000);
                break;

            case 'TRENDING_CURRENT_PAGE':
                dispatch({
                    type: 'TRENDING_CURRENT_PAGE',
                    payload: { page: action.page }
                });
                break;

            case 'MEGA_MENU_PARENT':
                // console.log(post.filter(e=> e.parent_category === action.url || e.category === action.url))
                setTimeout(() => {
                    dispatch({
                        type: 'MEGA_MENU_PARENT',
                        payload: {
                            articles: action.category_type === 'parent' ? post.filter(e => e.parent_category === action.url || e.category === action.url).sort((a, b) => b.date - a.date).splice((action.page - 1) * 4, 4).map(e => ({ ...e, page: action.page })) : post.filter(e => e.category === action.url).sort((a, b) => b.date - a.date).splice((action.page - 1) * 4, 4).map(e => ({ ...e, page: action.page })),
                            category_type: action.category_type,
                            url: action.url,
                            total_articles: action.category_type === 'parent' ? post.filter(e => e.parent_category === action.url || e.category === action.url).length : post.filter(e => e.category === action.url).length,
                            page: action.page
                        }
                    });
                }, 1000);
                break;

            case 'MEGA_MENU_PARENT_CURRENT_PAGE':
                dispatch({
                    type: 'MEGA_MENU_PARENT_CURRENT_PAGE',
                    payload: {
                        category_type: action.category_type,
                        url: action.url,
                        page: action.page
                    }
                });
                break;

            case 'MEGA_MENU_PARENT_ACTIVE_STATE':
                dispatch({
                    type: 'MEGA_MENU_PARENT_ACTIVE_STATE',
                    payload: {
                        activeMenu: action.activeMenu
                    }
                });
                break;

            case 'MEGA_MENU_CATEGORY':
                setTimeout(() => {
                    dispatch({
                        type: 'MEGA_MENU_CATEGORY',
                        payload: {
                            articles: post.filter(e => e.category === action.url).sort((a, b) => b.views - a.views).splice((action.page - 1) * 5, 5).map(e => ({ ...e, page: action.page })),
                            url: action.url,
                            total_articles: post.filter(e => e.category === action.url).length,
                            page: action.page
                        }
                    });
                }, 1000);
                break;

            case 'MEGA_MENU_CATEGORY_CURRENT_PAGE':
                    dispatch({
                        type: 'MEGA_MENU_CATEGORY_CURRENT_PAGE',
                        payload: {
                            url: action.url,
                            page: action.page
                        }
                    });
                break;

            case 'MEGA_MENU_SUB_CATEGORY':
                setTimeout(() => {
                    dispatch({
                        type: 'MEGA_MENU_SUB_CATEGORY',
                        payload: {
                            articles: post.filter(e => e.sub_category.includes(action.url)).sort((a, b) => b.views - a.views).splice((action.page - 1) * 5, 5).map(e => ({ ...e, page: action.page })),
                            url: action.url,
                            total_articles: post.filter(e => e.sub_category.includes(action.url)).length,
                            page: action.page
                        }
                    });
                }, 1000);
                break;

            case 'MEGA_MENU_SUB_CATEGORY_CURRENT_PAGE':
                    dispatch({
                        type: 'MEGA_MENU_SUB_CATEGORY_CURRENT_PAGE',
                        payload: {
                            url: action.url,
                            page: action.page
                        }
                    });
                break;

                case 'MOST_POPULAR':
                    const most_popular = post.concat().sort((a, b) => b.views - a.views).splice((action.page - 1) * 3, 3);
                    setTimeout(() => {
                        dispatch({
                            type: 'MOST_POPULAR',
                            payload: {
                                articles: most_popular.map(e => ({ ...e, page: action.page })),
                                total_articles: post.length,
                                page: action.page,
                            }
                        });
                    }, 1000);
                    break;
    
                case 'MOST_POPULAR_CURRENT_PAGE':
                    dispatch({
                        type: 'MOST_POPULAR_CURRENT_PAGE',
                        payload: { page: action.page }
                    });
                    break;

            default:
                break;
        }
    }
}

export default action
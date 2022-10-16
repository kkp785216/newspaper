import { post } from "../lib/post";
import fetchapi from "../lib/api";

const action = (action) => {

    return async (dispatch) => {
        switch (action.type) {
            case 'CATEGORY':
                try {
                    const { category } = await fetchapi('getcategories');
                    dispatch({
                        type: 'CATEGORY',
                        payload: { category }
                    });
                } catch (error) { }
                break;

            case 'CONFIG':
                dispatch({
                    type: 'CONFIG',
                    payload: { config: action.config }
                });
                break;

            case 'ARTICLES_LOCAL':
                try {
                    const res = await fetchapi(`getarticles?uses=allarticles&limit=${8}&page=${action.page}`)
                    dispatch({
                        type: 'ARTICLES_LOCAL',
                        payload: {
                            articles: res.articles.map(e => ({ ...e, page: action.page })),
                            total_articles: res.total_articles,
                            page: action.page
                        }
                    });
                } catch (error) { console.log(error) }
                break;

            case 'ARTICLE_CURRENT_PAGE':
                dispatch({
                    type: 'ARTICLE_CURRENT_PAGE',
                    payload: { page: action.page }
                });
                break;

            case 'FEATURED':
                try {
                    const res = await fetchapi(`getarticles?uses=articlesbycategory&category=${'featured'}&type=sub_category&sortby=${'views'}&order=-1&limit=${5}&page=${action.page}`);
                    dispatch({
                        type: 'FEATURED',
                        payload: {
                            articles: res.articles.map(e => ({ ...e, page: action.page })),
                            total_articles: res.total_articles,
                            page: action.page,
                        }
                    });
                } catch (error) { }
                break;

            case 'FEATURED_CURRENT_PAGE':
                dispatch({
                    type: 'FEATURED_CURRENT_PAGE',
                    payload: { page: action.page }
                });
                break;

            case 'TRENDING':
                try {
                    const res = await fetchapi(`getarticles?uses=articlesbycategory&category=${'trending'}&type=sub_category&sortby=${'createdAt'}&order=-1&limit=${10}&page=${action.page}`);
                    dispatch({
                        type: 'TRENDING',
                        payload: {
                            articles: res.articles.map(e => ({ ...e, page: action.page })),
                            total_articles: res.total_articles,
                            page: action.page,
                        }
                    });
                } catch (error) { }
                break;

            case 'TRENDING_CURRENT_PAGE':
                dispatch({
                    type: 'TRENDING_CURRENT_PAGE',
                    payload: { page: action.page }
                });
                break;

            case 'MEGA_MENU_PARENT':
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
                try {
                    const res = await fetchapi(`getarticles?uses=popular&limit=${3}&page=${action.page}`);
                    console.log(res)
                    dispatch({
                        type: 'MOST_POPULAR',
                        payload: {
                            articles: res.articles.map(e => ({ ...e, page: action.page })),
                            total_articles: res.count,
                            page: action.page,
                        }
                    });
                } catch (error) { console.log(error) }
                break;

            case 'MOST_POPULAR_CURRENT_PAGE':
                dispatch({
                    type: 'MOST_POPULAR_CURRENT_PAGE',
                    payload: { page: action.page }
                });
                break;

            case 'FOOTER_EDITOR_CHOICE':
                try {
                    const res = await fetchapi(`getarticles?uses=articlesbycategory&category=${'editor-choice'}&type=sub_category&sortby=${'createdAt'}&order=-1&limit=${3}&page=${1}`);
                    dispatch({
                        type: 'FOOTER_EDITOR_CHOICE',
                        payload: { articles: res.articles },
                    });
                } catch (error) { }
                break;

            case 'FOOTER_MOST_POPULAR':
                try {
                    const res = await fetchapi(`getarticles?uses=popular&limit=${3}&page=${1}`);
                    dispatch({
                        type: 'FOOTER_MOST_POPULAR',
                        payload: { articles: res.articles },
                    });
                } catch (error) { }
                break;

            default:
                break;
        }
    }
}

export default action
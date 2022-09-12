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
                const beforeFeatured = post.concat().filter(e=>e.sub_category.includes('featured')).splice((action.page - 1) * 5, 5);
                beforeFeatured.forEach(e=>e.page = action.page);
                const featured = beforeFeatured.sort((a,b)=>b.views - a.views);
                console.log(featured)
                setTimeout(() => {
                    dispatch({
                        type: 'FEATURED',
                        payload: {
                            articles: featured,
                            total_articles: post.filter(e=>e.sub_category.includes('featured')).length,
                            page: action.page
                        }
                    });
                }, 1000);
                break;

            default:
                break;
        }
    }
}

export default action
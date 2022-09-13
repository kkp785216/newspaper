export const initialState = {
    articles: {
        articles: [],
        total_articles: 0,
        pages_loaded: [],
        current_page: 1,
    },
    featured: {
        articles: [],
        total_articles: 0,
        pages_loaded: [],
        current_page: 1,
    },
    category: [],
}

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CATEGORY':
            return {
                ...state,
                category: payload.category
            }

        case 'ARTICLES_LOCAL':
            return {
                ...state,
                articles: {
                    articles: [...state.articles.articles, ...payload.articles],
                    total_articles: payload.total_articles,
                    pages_loaded: Array.from(new Set(state.articles.pages_loaded).add(payload.page)),
                    current_page: payload.page,
                },
            }

        case 'ARTICLE_CURRENT_PAGE':
            return {
                ...state,
                articles: {
                    ...state.articles,
                    current_page: payload.page,
                },
            }

        case 'FEATURED':
            return {
                ...state,
                featured: {
                    articles: [...state.featured.articles, ...payload.articles],
                    total_articles: payload.total_articles,
                    pages_loaded: Array.from(new Set(state.featured.pages_loaded).add(payload.page)),
                    current_page: payload.page,
                },
            }

        case 'FEATURED_CURRENT_PAGE':
            return {
                ...state,
                featured: {
                    ...state.featured,
                    current_page: payload.page,
                },
            }

        default:
            return state
    }
}
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
    }
}

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'Hello':
            return {
                ...state,
                name: payload.name
            }

        case 'ARTICLES_LOCAL':
            return {
                ...state,
                articles: {
                    // articles: [...state.articles.articles, ...payload.articles],
                    articles: payload.articles,
                    total_articles: payload.total_articles,
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
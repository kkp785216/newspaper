export const initialState = {
    articles: {
        articles: [],
        total_articles: 0,
    },
    featured: {
        articles: [],
        total_articles: 0,
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
                    // articles: [...state.articles.articles, ...payload.articles],
                    articles: payload.articles,
                    total_articles: payload.total_articles,
                },
            }

        default:
            return state
    }
}
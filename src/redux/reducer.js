export const initialState = {
    articles: [],
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
                articles: [...state.articles, ...payload]
            }

        default:
            return state
    }
}
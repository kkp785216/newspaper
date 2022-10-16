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
    trending: {
        articles: [],
        total_articles: 0,
        pages_loaded: [],
        current_page: 1,
    },
    most_popular: {
        articles: [],
        total_articles: 0,
        pages_loaded: [],
        current_page: 1,
    },
    category: [],
    config: {},
    mega_menu_parent: {},
    mega_menu_category: {},
    mega_menu_sub_category: {},
    footer_editor_choice: [],
    footer_most_popular: [],
}

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CATEGORY':
            return {
                ...state,
                category: payload.category,
            }

        case 'CONFIG':
            return {
                ...state,
                config: payload.config,
            }

        case 'ARTICLES_LOCAL':
            return {
                ...state,
                articles: {
                    articles: !state.articles.pages_loaded.includes(payload.page) ? [...state.articles.articles, ...payload.articles] : state.articles.articles,
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
                    articles: !state.featured.pages_loaded.includes(payload.page) ? [...state.featured.articles, ...payload.articles] : state.featured.articles,
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

        case 'TRENDING':
            return {
                ...state,
                trending: {
                    articles: [...state.trending.articles, ...payload.articles],
                    total_articles: payload.total_articles,
                    pages_loaded: Array.from(new Set(state.trending.pages_loaded).add(payload.page)),
                    current_page: payload.page,
                },
            }

        case 'TRENDING_CURRENT_PAGE':
            return {
                ...state,
                trending: {
                    ...state.trending,
                    current_page: payload.page,
                },
            }

        case 'MEGA_MENU_PARENT':
            return {
                ...state,
                mega_menu_parent: {
                    ...state.mega_menu_parent,
                    [payload.category_type === 'parent' ? `${payload.url}_all` : payload.url]: {
                        ...state.mega_menu_parent[payload.category_type === 'parent' ? `${payload.url}_all` : payload.url],
                        articles: state.mega_menu_parent[payload.category_type === 'parent' ? `${payload.url}_all` : payload.url] ? (payload.page !== state.mega_menu_parent[payload.category_type === 'parent' ? `${payload.url}_all` : payload.url].current_page ? [...state.mega_menu_parent[payload.category_type === 'parent' ? `${payload.url}_all` : payload.url].articles, ...payload.articles] : state.mega_menu_parent[payload.category_type === 'parent' ? `${payload.url}_all` : payload.url].articles) : payload.articles,
                        total_articles: payload.total_articles,
                        pages_loaded: Array.from(new Set(state.mega_menu_parent[payload.category_type === 'parent' ? `${payload.url}_all` : payload.url]?.pages_loaded).add(payload.page)),
                        current_page: payload.page,
                    },
                },
                mega_menu_parent_activeMenu: payload.category_type === 'parent' ? `${payload.url}_all` : payload.url
            }

        case 'MEGA_MENU_PARENT_CURRENT_PAGE':
            return {
                ...state,
                mega_menu_parent: {
                    ...state.mega_menu_parent,
                    [payload.category_type === 'parent' ? `${payload.url}_all` : payload.url]: {
                        ...state.mega_menu_parent[payload.category_type === 'parent' ? `${payload.url}_all` : payload.url],
                        current_page: payload.page,
                    },
                },
                mega_menu_parent_activeMenu: payload.category_type === 'parent' ? `${payload.url}_all` : payload.url
            }

        case 'MEGA_MENU_CATEGORY':
            return {
                ...state,
                mega_menu_category: {
                    ...state.mega_menu_category,
                    [payload.url]: {
                        ...state.mega_menu_category[payload.url],
                        articles: state.mega_menu_category[payload.url] ? (payload.page !== state.mega_menu_category[payload.url].current_page ? [...state.mega_menu_category[payload.url].articles, ...payload.articles] : state.mega_menu_category[payload.url].articles) : payload.articles,
                        total_articles: payload.total_articles,
                        pages_loaded: Array.from(new Set(state.mega_menu_category[payload.url]?.pages_loaded).add(payload.page)),
                        current_page: payload.page,
                    },
                },
            }

        case 'MEGA_MENU_CATEGORY_CURRENT_PAGE':
            return {
                ...state,
                mega_menu_category: {
                    ...state.mega_menu_category,
                    [payload.url]: {
                        ...state.mega_menu_category[payload.url],
                        current_page: payload.page,
                    },
                },
            }

        case 'MEGA_MENU_SUB_CATEGORY':
            return {
                ...state,
                mega_menu_sub_category: {
                    ...state.mega_menu_sub_category,
                    [payload.url]: {
                        ...state.mega_menu_sub_category[payload.url],
                        articles: state.mega_menu_sub_category[payload.url] ? (payload.page !== state.mega_menu_sub_category[payload.url].current_page ? [...state.mega_menu_sub_category[payload.url].articles, ...payload.articles] : state.mega_menu_sub_category[payload.url].articles) : payload.articles,
                        total_articles: payload.total_articles,
                        pages_loaded: Array.from(new Set(state.mega_menu_sub_category[payload.url]?.pages_loaded).add(payload.page)),
                        current_page: payload.page,
                    },
                },
            }

        case 'MEGA_MENU_SUB_CATEGORY_CURRENT_PAGE':
            return {
                ...state,
                mega_menu_sub_category: {
                    ...state.mega_menu_sub_category,
                    [payload.url]: {
                        ...state.mega_menu_sub_category[payload.url],
                        current_page: payload.page,
                    },
                },
            }

        case 'MOST_POPULAR':
            console.log(payload.total_articles)
            return {
                ...state,
                most_popular: {
                    articles: !state.most_popular.pages_loaded.includes(payload.page) ? [...state.most_popular.articles, ...payload.articles] : state.most_popular.articles,
                    pages_loaded: Array.from(new Set(state.most_popular.pages_loaded).add(payload.page)),
                    current_page: payload.page,
                    total_articles: payload.total_articles,
                },
            }

        case 'MOST_POPULAR_CURRENT_PAGE':
            return {
                ...state,
                most_popular: {
                    ...state.most_popular,
                    current_page: payload.page,
                },
            }


        case 'FOOTER_EDITOR_CHOICE':
            return {
                ...state,
                footer_editor_choice: payload.articles,
            }

        case 'FOOTER_MOST_POPULAR':
            return {
                ...state,
                footer_most_popular: payload.articles,
            }

        default:
            return state
    }
}
type DisplayArticlesType = {
    articles: {
        _id: string;
        parent_category: string;
        category: string;
        sub_category: string[];
        title: string;
        author: string;
        status: string;
        views: number;
        url: string;
        date: string;
        img_url: string | null;
        img_comp: string;
        content: string | null;
        content_type: string;
        order: number;
        template: number;
        createdAt: string;
        updatedAt: string;
        __v: number;
        commentCount: number;
        page: number;
    }[],
    total_articles: number;
    pages_loaded: number[];
    current_page: number;
}

export type {
    DisplayArticlesType,
};

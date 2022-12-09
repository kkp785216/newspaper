import React, { useEffect, useState } from 'react'
import DisplayArticles from '@sharedComps/DisplayArticles'
import { FetchArticleType } from "@const/apiResultTypes"
import fetchapi from 'lib/api'

interface Props {
    articlesData: FetchArticleType;
    category: String | String[];
}

const LatestArticles = ({ articlesData, category }: Props) => {

    const [page, setPage] = useState(articlesData ? articlesData.page : 1);

    const [articles, setArticles] = useState({
        articles: articlesData ? [...articlesData.articles.map(e => ({ ...e, page: page }))] : [],
        total_articles: articlesData ? articlesData.total_articles : 0,
        pages_loaded: articlesData ? [articlesData.page] : [],
        current_page: page,
    });

    useEffect(() => {
        !articles.pages_loaded.includes(page) &&
            (async () => {
                try {
                    let res: FetchArticleType = await fetchapi(`getarticles?uses=articlesbycategory&category=${category}&type=parent&sortby=order&order=-1&limit=8&page=${page}`, `${process.env.NEXT_PUBLIC_HOST}`);
                    const payload = {
                        articles: res.articles.map(e => ({ ...e, page: page })),
                        total_articles: res.total_articles,
                        page: page,
                    }
                    setArticles({
                        ...articles,
                        articles: !articles.pages_loaded.includes(payload.page) ? [...articles.articles, ...payload.articles] : articles.articles,
                        total_articles: payload.total_articles,
                        pages_loaded: Array.from(new Set(articles.pages_loaded).add(payload.page)),
                        current_page: payload.page,
                    });
                } catch (error) { console.log(error) }
            })();

        articles.pages_loaded.includes(page) &&
            setArticles({
                ...articles,
                current_page: page
            });
        // eslint-disable-next-line
    }, [page]);

    return (
        <DisplayArticles articles={articles} page={page} setPage={setPage} heading={category.toString().replace('-', ' ')} />
    )
}

export default LatestArticles
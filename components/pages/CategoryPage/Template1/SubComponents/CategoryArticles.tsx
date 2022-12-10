import React, { useEffect, useState } from 'react'
import DisplayArticles from '@sharedComps/DisplayArticles'
import { FetchArticleType } from "@const/apiResultTypes"

interface Props {
    articlesData: FetchArticleType;
    category: String;
    setPage: (page: number) => void
}

const LatestArticles = ({ articlesData, category, setPage }: Props) => {

    const [articles, setArticles] = useState({
        articles: articlesData.articles.map(e => ({ ...e, page: articlesData.page })),
        total_articles: articlesData.total_articles,
        pages_loaded: [articlesData.page],
        current_page: articlesData.page,
    });

    useEffect(()=>{
        if(!articles.pages_loaded.includes(articlesData.page)) {
            setArticles({
                ...articles,
                articles: !articles.pages_loaded.includes(articlesData.page) ? [...articles.articles, ...articlesData.articles.map(e => ({ ...e, page: articlesData.page }))] : articles.articles.map(e => ({ ...e, page: articlesData.page })),
                total_articles: articlesData.total_articles,
                pages_loaded: Array.from(new Set(articles.pages_loaded).add(articlesData.page)),
                current_page: articlesData.page,
            })
        }
        else {
            setArticles({
                ...articles,
                current_page: articlesData.page
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[articlesData.page]);
    
    return (
        <DisplayArticles articles={articles} page={articlesData.page} setPage={setPage} baseurl={`/category/${category}`} heading={category} />
    )
}

export default LatestArticles
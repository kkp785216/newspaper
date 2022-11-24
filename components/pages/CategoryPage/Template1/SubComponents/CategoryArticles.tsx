import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../../../../redux/action'
import DisplayArticles from '@sharedComps/DisplayArticles'

const LatestArticles = () => {

    const { articles } = useSelector(state => state);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        !articles.pages_loaded.includes(page) &&
            dispatch(action({
                type: 'ARTICLES_LOCAL',
                page: page
            }));

        articles.pages_loaded.includes(page) &&
            dispatch(action({
                type: 'ARTICLE_CURRENT_PAGE',
                page: page
            }));
        // eslint-disable-next-line
    }, [page]);

    return (
        <DisplayArticles articles={articles} page={page} setPage={setPage} />
    )
}

export default LatestArticles
import React from 'react'
import Template1 from '@pagesComps/CategoryPage/Template1/index'
import fetchapi from 'lib/api'
import { FetchArticleType } from '@const/apiResultTypes'
import type { GetServerSideProps } from "next";

interface Props {
    articlesData: FetchArticleType;
}

const category = ({ articlesData }: Props) => {
    return (
        <div>
            <Template1 articlesData={articlesData} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const { params } = context;
    let articlesData: FetchArticleType = await fetchapi(`getarticles?uses=articlesbycategory&category=${params.category}&type=parent&sortby=order&order=-1&limit=8&page=1`, `${process.env.NEXT_PUBLIC_HOST}`);
    return {
        props: { articlesData }, // will be passed to the page component as props
    }
}

export default category
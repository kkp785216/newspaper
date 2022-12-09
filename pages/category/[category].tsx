import React from 'react'
import fetchapi from 'lib/api'
import { FetchArticleType } from '@const/apiResultTypes'
import type { GetServerSideProps } from "next";
import CategoryBanner from '@pagesComps/CategoryPage/Template1/SubComponents/CategoryBanner';
import CategoryArticle from '@pagesComps/CategoryPage/Template1/SubComponents/CategoryArticles'
import { Aside, Main, Section } from 'components/Layout';

interface Props {
    articlesData: FetchArticleType;
    category: String | String[];
}

const category = ({ articlesData, category }: Props) => {
    return (
        <div>
            <CategoryBanner category={category}/>
            <Section>
                <Main>
                    <CategoryArticle articlesData={articlesData} category={category} />
                </Main>
                <Aside>
                    This is Sidebar
                </Aside>
            </Section>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const { params } = context;
    let articlesData: FetchArticleType = await fetchapi(`getarticles?uses=articlesbycategory&category=${params.category}&type=parent&sortby=order&order=-1&limit=8&page=1`, `${process.env.NEXT_PUBLIC_HOST}`);
    return {
        props: { articlesData, category: params.category }, // will be passed to the page component as props
    }
}

export default category
import React from 'react'
import { Aside, Main, Section } from '../../../Layout'
import CategoryArticle from '@pagesComps/CategoryPage/Template1/SubComponents/CategoryArticles'
import CategoryBanner from '@pagesComps/CategoryPage/Template1/SubComponents/CategoryBanner'

const Template1 = ({articlesData}) => {
    return (
        <div>
            <CategoryBanner />
            <Section>
                <Main>
                    <CategoryArticle articlesData={articlesData} />
                </Main>
                <Aside>
                    This is Sidebar
                </Aside>
            </Section>
        </div>
    )
}

export default Template1
import React from 'react'
import { Aside, Main, Section } from '../../../Layout'
import LatestArticles from '../../../SharedComponents/LatestArticles'
import CategoryBanner from './CategoryBanner'

const Template1 = () => {
    return (
        <div>
            <CategoryBanner />
            <Section>
                <Main>
                    <LatestArticles />
                </Main>
                <Aside>
                    This is Sidebar
                </Aside>
            </Section>
        </div>
    )
}

export default Template1
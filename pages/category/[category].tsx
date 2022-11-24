import React from 'react'
import Template1 from '@pagesComps/CategoryPage/Template1/index'
import fetchapi from 'lib/api'

const category = ({ articlesData }) => {
    return (
        <div>
            <Template1 articlesData={articlesData} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const { params, res } = context;
    let articlesData = await fetchapi(`getarticles?uses=articlesbycategory&category=${params.category}&type=parent&sortby=order&order=-1&limit=8&page=1`, `${process.env.NEXT_PUBLIC_HOST}`);
    return {
        props: { articlesData }, // will be passed to the page component as props
    }
}

export default category
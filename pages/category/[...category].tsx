import CategoryBanner from '@pagesComps/CategoryPage/Template1/SubComponents/CategoryBanner';
import CategoryArticle from '@pagesComps/CategoryPage/Template1/SubComponents/CategoryArticles';
import { Aside, Main, Section } from 'components/Layout';
import { FetchArticleType } from '@const/apiResultTypes';
import fetchapi from 'lib/api';
import wrapper from '@redux/store';
import { useRouter } from 'next/router';

interface Props {
    articlesData: FetchArticleType;
    category: String;
    baseurl: String;
    page: String | 1;
    breadcrumbCategory: { url: String, name: String, type: String, parent: String | null }[];
}

export const Category = ({ articlesData, category, baseurl, breadcrumbCategory }: Props) => {

    const router = useRouter();

    const setPage = (page: number, baseurl: String) => {
        router.push(page === 1 ? `${baseurl}` : `${baseurl}/page/${page}`, undefined, { scroll: false })
    }

    return (
        <div>
            <CategoryBanner category={category} breadcrumbCategory={breadcrumbCategory} baseurl={baseurl}/>
            <Section>
                <Main>
                    <CategoryArticle key={`${category}`} articlesData={articlesData} category={category} baseurl={baseurl} setPage={setPage} />
                </Main>
                <Aside>
                    This is Sidebar
                </Aside>
            </Section>
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const { params, res } = context;
    const parentCategory = params.category.toString().split(",")[0];
    const childCategory = params.category.toString().split(",")[1];
    const allParentCategory: { url: String, name: String, type: String, parent?: String | null }[] = store.getState().category.filter(e => e.type === 'parent');
    const allChildCategory: { url: String, name: String, type: String, parent?: String | null }[] = store.getState().category.filter(e => e.type === 'category');
    if (allParentCategory.find(e => e.url === parentCategory) && (params.category.toString().match(/^[a-z0-9-]+(\,page\,[0-9]{1,5})?$/gi))) {
        const page = params.category.toString().split(",")[2] ? params.category.toString().split(",")[2] : 1;
        let articlesData: FetchArticleType = await fetchapi(`getarticles?uses=articlesbycategory&category=${parentCategory}&type=parent&sortby=order&order=-1&limit=8&page=${page}`, `${process.env.NEXT_PUBLIC_HOST}`);
        const baseurl = `/category/${parentCategory}`;
        const breadcrumbCategory = store.getState().category.filter(e => e.parent === parentCategory);
        if (page <= Math.ceil(articlesData.total_articles / 8) && page > 0) {
            return {
                props: { articlesData, category: parentCategory, baseurl, breadcrumbCategory }, // will be passed to the page component as props
            }
        }
        else {
            res.statusCode = 404;
            return {
                notFound: true,
                props: {
                    error: `couldn't find the thing`,
                },
            }
        }
    }
    else if (allChildCategory.find(e => e.url === childCategory) && (params.category.toString().match(/^[a-z0-9-]+\,[a-z0-9-]+(\,page\,[0-9]{1,5})?$/gi))) {
        const page = params.category.toString().split(",")[3] ? params.category.toString().split(",")[3] : 1;
        let articlesData: FetchArticleType = await fetchapi(`getarticles?uses=articlesbycategory&category=${childCategory}&type=category&sortby=order&order=-1&limit=8&page=${page}`, `${process.env.NEXT_PUBLIC_HOST}`);
        const baseurl = `/category/${parentCategory}/${childCategory}`
        if (page <= Math.ceil(articlesData.total_articles / 8) && page > 0) {
            return {
                props: { articlesData, category: childCategory, baseurl }, // will be passed to the page component as props
            }
        }
        else {
            res.statusCode = 404;
            return {
                notFound: true,
                props: {
                    error: `couldn't find the thing`,
                },
            }
        }
    }
    else {
        res.statusCode = 404;
        return {
            notFound: true,
            props: {
                error: `couldn't find the thing`,
            },
        }
    }
});

export default Category
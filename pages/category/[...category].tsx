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
    page: String | 1;
}

export const Category = ({ articlesData, category }: Props) => {

    const router = useRouter();

    const setPage = (page: number) => {
        router.push(page === 1 ? `/category/${category}` : `/category/${category}/page/${page}`, undefined, { scroll: false })
    }

    return (
        <div>
            <CategoryBanner category={category} />
            <Section>
                <Main>
                    <CategoryArticle key={`${category}`} articlesData={articlesData} category={category} setPage={setPage} />
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
    const category = params.category.toString().split(",")[0];
    const allCategory: { url: String, name: String, type: String, parent?: String | null }[] = store.getState().category.filter(e => e.type === 'parent')
    if (allCategory.find(e => e.url === category) && (params.category.toString().match(/^[a-z0-9-]+(\,page\,[0-9]{1,5})?$/gi))) {
        const page = params.category.toString().split(",")[2] ? params.category.toString().split(",")[2] : 1;
        let articlesData: FetchArticleType = await fetchapi(`getarticles?uses=articlesbycategory&category=${category}&type=parent&sortby=order&order=-1&limit=8&page=${page}`, `${process.env.NEXT_PUBLIC_HOST}`);
        if (page <= Math.ceil(articlesData.total_articles / 8) && page > 0) {
            return {
                props: { articlesData, category }, // will be passed to the page component as props
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
import Template1 from '../components/Template1'
import fetchapi from '../lib/api'

const Post = ({ article, nextprev, route }) => {
  return (
    <div>
      {article && nextprev && <Template1 key={article.url} article={article} nextprev={nextprev} route={route} />}
    </div>
  )
}

export async function getStaticPaths(context) {
  const routes = await fetchapi('getroutes?uses=articles', `${process.env.NEXT_PUBLIC_HOST}`);
  return {
    paths: routes.routes.map((route) => {
      return { params: { post: route.url } }
    }),
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  let article = await fetchapi(`getarticles?uses=singlearticle&slug=${params.post}`, `${process.env.NEXT_PUBLIC_HOST}`);
  let nextprev = await fetchapi(`getarticles?uses=prevnext&slug=${params.post}`, `${process.env.NEXT_PUBLIC_HOST}`);
  return {
    props: { article: article.article, nextprev, route: params.post }, // will be passed to the page component as props
  }
}

export default Post
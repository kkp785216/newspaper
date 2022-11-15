import Template1 from '../components/Template1'
import fetchapi from '../lib/api'

const Post = ({ article, nextprev, route, comments, related }) => {
  return (
    <div>
      {article && nextprev && <Template1 key={article.url} article={article} nextprev={nextprev} route={route} comments={comments} related={related} />}
    </div>
  )
}

// export async function getStaticPaths(context) {
//   const routes = await fetchapi('getroutes?uses=articles', `${process.env.NEXT_PUBLIC_HOST}`);
//   return {
//     paths: routes.routes.map((route) => {
//       return { params: { post: route.url } }
//     }),
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// export async function getStaticProps(context) {
//   const { params } = context;
//   let article = await fetchapi(`getarticles?uses=singlearticle&slug=${params.post}`, `${process.env.NEXT_PUBLIC_HOST}`);
//   let nextprev = await fetchapi(`getarticles?uses=prevnext&slug=${params.post}`, `${process.env.NEXT_PUBLIC_HOST}`);
//   let comments = await fetchapi(`getcomments?post=${params.post}&limit=3&page=1`, `${process.env.NEXT_PUBLIC_HOST}`);
//   return {
//     props: { article: article.article, nextprev, route: params.post, comments }, // will be passed to the page component as props
//   }
// }

export async function getServerSideProps(context) {
  const { params, res } = context;
  const routes = await fetchapi('getroutes?uses=articles', `${process.env.NEXT_PUBLIC_HOST}`);
  if (routes.routes.find(route => route.url === params.post)) {
    let article = await fetchapi(`getarticles?uses=singlearticle&slug=${params.post}`, `${process.env.NEXT_PUBLIC_HOST}`);
    let nextprev = await fetchapi(`getarticles?uses=prevnext&slug=${params.post}`, `${process.env.NEXT_PUBLIC_HOST}`);
    let comments = await fetchapi(`getcomments?post=${params.post}&limit=3&page=1`, `${process.env.NEXT_PUBLIC_HOST}`);
    let related = await fetchapi(`getarticles?uses=relatedposts&type=category&limit=3&page=1&slug=${params.post}`, `${process.env.NEXT_PUBLIC_HOST}`);
    return {
      props: { article: article.article, nextprev, route: params.post, comments, related }, // will be passed to the page component as props
    }
  }
  else {
    res.statusCode = 404
    return {
      notFound: true,
      props: {
        error: `couldn't find the thing`
      },
    }
  }
}

export default Post
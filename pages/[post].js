// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
import Template1 from '../components/Template1'
import fetchapi from '../lib/api'

const Post = ({ article, nextprev }) => {
  // const router = useRouter()
  // const { post } = router.query
  // const [article, setArticle] = useState(null);
  // const [nextprev, setNextPrev] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     if (post !== undefined) {
  //       try {
  //         let article = await fetchapi(`getarticles?uses=singlearticle&slug=${post}`);
  //         let prevnext = await fetchapi(`getarticles?uses=prevnext&slug=${post}`);
  //         setArticle(article.article);
  //         setNextPrev(prevnext);
  //         console.log(article.article, "this is article")
  //         console.log(data, "this is data")
  //       } catch (error) { console.log(error.message) }
  //     }
  //   })();
  // }, [post]);

  return (
    <div>
      {article && nextprev && <Template1 key={article.url} article={article} nextprev={nextprev} />}
    </div>
  )
}

export async function getStaticPaths(context) {
  const routes = await fetchapi('getroutes?uses=articles', 'localhost:3000');
  return {
    paths: routes.routes.map((route) => {
      return { params: { post: route.url } }
    }),
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  let article = await fetchapi(`getarticles?uses=singlearticle&slug=${params.post}`, 'localhost:3000');
  let nextprev = await fetchapi(`getarticles?uses=prevnext&slug=${params.post}`, 'localhost:3000');
  return {
    props: { article: article.article, nextprev }, // will be passed to the page component as props
  }
}

export default Post
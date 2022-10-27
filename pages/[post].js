import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Template1 from '../components/Template1'
import fetchapi from '../lib/api'

const Post = () => {
  const router = useRouter()
  const { post } = router.query
  const [article, setArticle] = useState(null);
  const [nextprev, setNextPrev] = useState(null);

  useEffect(() => {
    (async () => {
      if (post !== undefined) {
        try {
          let article = await fetchapi(`getarticles?uses=singlearticle&slug=${post}`);
          let prevnext = await fetchapi(`getarticles?uses=prevnext&slug=${post}`);
          setArticle(article.article);
          setNextPrev(prevnext);
        } catch (error) { console.log(error.message) }
      }
    })();
  }, [post]);

  return (
    <div>
      {article && nextprev && <Template1 key={article.url} article={article} nextprev={nextprev} />}
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const { req, query, res, asPath, pathname } = context;
//   let article = await fetchapi(`getarticles?uses=singlearticle&slug=${query.post}`, req.headers.host);
//   return {
//     props: {data: article}, // will be passed to the page component as props
//   }
// }

export default Post
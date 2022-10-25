import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Template1 from '../components/Template1'
import fetchapi from '../lib/api'

const Post = () => {
  const router = useRouter()
  const { post } = router.query
  const [article, setArticle] = useState(null);

  useEffect(() => {
    (async () => {
      if (post !== undefined) {
        try {
          let article = await fetchapi(`getarticles?uses=singlearticle&slug=${post}`);
          setArticle(article.article);
        } catch (error) { console.log(error.message) }
      }
    })();
  }, [post]);

  return (
    <div>
      {article && <Template1 article={article} />}
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
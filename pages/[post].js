import { useRouter } from 'next/router'
import Template1 from '../components/Template1'
import fetchapi from '../lib/api'

const Post = ({data}) => {
  const router = useRouter()
  const { post } = router.query

  return (
    <div>
      <Template1 article={data.article}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req, query, res, asPath, pathname } = context;
  let article = await fetchapi(`getarticles?uses=singlearticle&slug=${query.post}`, req.headers.host);
  return {
    props: {data: article}, // will be passed to the page component as props
  }
}

export default Post
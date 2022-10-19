import { useRouter } from 'next/router'
import fetchapi from '../lib/api'

const Post = (response) => {
  const router = useRouter()
  const { post } = router.query

  return (
    <div>
      Helo {post}
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetchapi('getroutes?uses=articles');
  return {
    paths: res['routes'] ? res.routes.map(route=> ({params: {post: route.url}})) : [{params: {}}],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const res = await fetchapi(`getarticles?slug=${post}`);
  return {
    // Passed to the page component as props
    props: { response: { res } },
  }
}

export default Post
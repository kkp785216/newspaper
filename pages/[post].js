import { useRouter } from 'next/router'
import Template1 from '../components/Template1'

const Post = () => {
  const router = useRouter()
  const { post } = router.query

  return (
    <div>
      <Template1 />
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Post
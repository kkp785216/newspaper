import { useEffect, useRef } from "react";
import '../styles/globals.css'
import { useRouter } from 'next/router'
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { preload } from "../redux/preload";
import Footer from "../components/Footer";
import store from "../redux/store";

const Layout = ({ children, app }) => {

  const dispatch = useDispatch();
  useEffect(() => {
    preload(dispatch);
    // eslint-disable-next-line
  }, []);

  const router = useRouter();

  switch (router.route) {
    case '/':
      return (<>
        <Header app={app} />
        {children}
        <Footer />
      </>)

    case '/[post]':
      return (<>
        <Header app={app} />
        {children}
        <Footer />
      </>)

    default:
      return <>{children}</>
  }
}

function MyApp({ Component, pageProps }) {
  const app = useRef();
  return (
    <div ref={app} className="App [&.active]:scale-[.9] origin-[50%_200px_0] transition-all duration-700 [&.active]:shadow-[0_0_46px_#000]">
      <Layout app={app}>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

// export default MyApp

export default store.withRedux(MyApp);
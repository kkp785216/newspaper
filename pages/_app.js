import { useEffect, useRef } from "react";
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from '../redux/store';
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { preload } from "../redux/preload";
import Footer from "../components/Footer";

const Layout = ({ children, app }) => {

  const dispatch = useDispatch();
  useEffect(() => {
    preload(dispatch);
    // eslint-disable-next-line
  }, []);

  const router = useRouter();
  switch (router.pathname) {
    case '/':
      return (<>
        <Header app={app}/>
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
    <div ref={app} className="App">
      <Provider store={store}>
        <Layout app={app}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  )
}

export default MyApp
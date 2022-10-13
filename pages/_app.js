import { useRef } from "react";
import '../styles/globals.css'
import { useRouter } from 'next/router'
import Header from "../components/Header";
import Footer from "../components/Footer";
import store from "../redux/store";
import action from "../redux/action";
import { category } from "../lib/category"
import { config } from "../lib/config";

const Layout = ({ children, app }) => {

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

MyApp.getInitialProps = store.getInitialAppProps((store) => async () => {
  store.dispatch(action({
    type: 'CATEGORY',
    category: category
  }));
  store.dispatch(action({
    type: 'CONFIG',
    config: config
  }));
  store.dispatch(action({
    type: 'FOOTER_EDITOR_CHOICE',
  }));
  store.dispatch(action({
    type: 'FOOTER_MOST_POPULAR',
  }));
});

// export default MyApp

export default store.withRedux(MyApp);
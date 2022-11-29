import { useRef } from "react";
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { wrapper } from '../redux/store';
import Header from "../components/Header";
import Footer from "../components/Footer";
import action from '../redux/action';

const AppLayout = ({ children, app }) => {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   preload(dispatch);
  //   // eslint-disable-next-line
  // }, []);

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

    case '/category/[category]':
      return (<>
        <Header app={app} />
        {children}
        <Footer />
      </>)

    case '/category/[category]/[childcategory]':
      return (<>
        <Header app={app} />
        {children}
        <Footer />
      </>)

    case '/404':
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
      <AppLayout app={app}>
        <Layout Component={Component} pageProps={pageProps} />
      </AppLayout>
    </div>
  )
}

const Layout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async () => {
  store.dispatch(action({
    type: 'CATEGORY',
  }));
  store.dispatch(action({
    type: 'CONFIG',
  }));
  store.dispatch(action({
    type: 'FOOTER_EDITOR_CHOICE',
  }));
  store.dispatch(action({
    type: 'FOOTER_MOST_POPULAR',
  }));
  return {
    props: {}, // will be passed to the page component as props
  }
});

export default wrapper.withRedux(MyApp);
import { FC } from "react";
import { useRef } from "react";
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { wrapper } from '../redux/store';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import fetchapi from "lib/api";

const AppLayout = ({ children, app }) => {

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

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const app = useRef();
  return (
    <Provider store={store}>
      <div className="overflow-hidden">
        <div ref={app} className="App [&.active]:scale-[.9] origin-[50%_200px_0] transition-all duration-700 [&.active]:shadow-[0_0_46px_#000]">
          <AppLayout app={app}>
            <Layout Component={Component} pageProps={pageProps} />
          </AppLayout>
        </div>
      </div>
    </Provider>
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

  // Dispatch CATEGORY
  try {
    const res = await fetchapi('getcategories', `${process.env.NEXT_PUBLIC_HOST}`);
    store.dispatch({
      type: 'CATEGORY',
      payload: { category: res.category }
    });
  } catch (error) { console.log(error) };

  // Dispatch CONFIG
  try {
    const res = await fetchapi('config', `${process.env.NEXT_PUBLIC_HOST}`);
    store.dispatch({
      type: 'CONFIG',
      payload: { config: res.config }
    });
  } catch (error) { console.log(error) };

  // Dispatch FOOTER_EDITOR_CHOICE
  try {
    const res = await fetchapi(`getarticles?uses=articlesbycategory&category=${'editor-choice'}&type=sub_category&sortby=${'createdAt'}&order=-1&limit=${3}&page=${1}`, `${process.env.NEXT_PUBLIC_HOST}`);
    store.dispatch({
      type: 'FOOTER_EDITOR_CHOICE',
      payload: { articles: res.articles },
    });
  } catch (error) { console.log(error) };

  // Dispatch FOOTER_MOST_POPULAR
  try {
    const res = await fetchapi(`getarticles?uses=popular&limit=${3}&page=${1}`, `${process.env.NEXT_PUBLIC_HOST}`);
    store.dispatch({
      type: 'FOOTER_MOST_POPULAR',
      payload: { articles: res.articles },
    });
  } catch (error) { console.log(error) };

  return {
    props: {}, // will be passed to the page component as props
  }
});

export default MyApp;
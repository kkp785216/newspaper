import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { preload } from "./redux/preload";

const Layout = ({ children }) => {
  return (
    <>{children}</>
  );
}

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    preload(dispatch);
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter >
      <div className="App scale-100 [&.active]:scale-[.9] origin-[50%_200px_0] transition-all duration-700 [&.active]:shadow-[0_0_46px_#000]">
        <Routes>
          <Route path='/' element={
            <Layout>
              <Header />
              <Home />
            </Layout>
          } />
          <Route path='/page/:pageId' element={
            <Layout>
              <Header />
              <Home />
            </Layout>
          } />
          <Route path='/blog' element={
            <Layout>
              <Header />
              hello this is krishna
              <Home />
            </Layout>
          } />
          <Route path=':newsId' element={
            <Layout>
              <Header />
              particular post
            </Layout>
          } />
          <Route path='/category' element={
            <Layout>
              <Header />
              Particular Catgory
            </Layout>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const Layout = ({ children }) => {
  return (
    <>{children}</>
  );
}

function App() {
  console.log('hii')
  return (
    <BrowserRouter >
      <div className="App">
        <Routes>
          <Route path='/' element={
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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const Layout = ({ children }) => {
  return (
    <>{children}</>
  );
}

function App() {
  // Redirect to basename if not
  window.location.pathname === '/' && (window.location.href = '/newspaper');
  return (
    <BrowserRouter basename="newspaper">
      <div className="App">
        <Routes>
          <Route path='/' element={
            <Layout>
              <Header />
              <Home />
            </Layout>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

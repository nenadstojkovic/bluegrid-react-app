// Vendor
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Layout from "./layout/Layout";

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Styles
import '../assets/styles/common.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
        <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<AboutUs />} path='/about-us' exact />
          <Route element={<Contact />} path='/contact' exact />
          <Route element={<NotFound />} path='*' />
        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

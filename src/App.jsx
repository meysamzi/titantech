import React from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import Singleproduct from './pages/Singleproduct';


import Store2 from './pages/Store2';
import Store3 from './pages/Store3';



import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='About' element={<About />} />
              <Route path='Contact' element={<Contact />} />
              <Route path='Product' element={<Store />} />
              <Route path='Product/:id' element={<Singleproduct />} />
              <Route path='Compare-Product' element={<CompareProduct />} />
              <Route path='Wishlist' element={<Wishlist />} />
              <Route path='Login' element={<Login />} />
              <Route path='Forgotpassword' element={<Forgotpassword />} />
              <Route path='Signup' element={<Signup />} />
              <Route path='Resetpassword' element={<Resetpassword />} />
              <Route path='Store2' element={<Store2 />} />
              <Route path='Store3' element={<Store3 />} />




              <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

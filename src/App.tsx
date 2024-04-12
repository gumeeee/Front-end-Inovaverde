import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
{/*import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';*/ }
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SobreNos from './pages/sobre-nos/Sobre';
// import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <>
    
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;
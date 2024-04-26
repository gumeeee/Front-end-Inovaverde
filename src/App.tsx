
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import SobreNos from './pages/sobre-nos/Sobre';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto';
import ListaProdutos from './components/produtos/listaProduto/ListaProduto';
import Perfil from './pages/perfil/Perfil';
import Carrossel from './components/carrossel/Carrossel';
import Carrinho from './pages/cart/Carrinho';
import Loja from './pages/loja/Loja';

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/contato" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<Loja />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/carrossel" element={<Carrossel />} />
              <Route path='/carrinho' element={<Carrinho />} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </AuthProvider>
    </>
  );
}
export default App;
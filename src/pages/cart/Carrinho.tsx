import { useContext, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar } from '../../services/Service';
import Produto from '../../models/Produto';
import CardProdutoCarrinho from '../../components/produtos/cardProduto/CardProdutoCarrinho';


function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado.');
      navigate('/');
    }
  }, [token]);

  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente.')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);
  return (
    <>
    <div className='absolute flex mt-5 w-screen justify-center items-center'>
      {produtos.length === 0 && (
        <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
      )}
    </div>
      <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
        {produtos.map((produto) => (
          <CardProdutoCarrinho key={produto.id} post={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useStore } from '../../../contexts/StoreContext';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';

interface CardProdutoProps {
  post: Produto;
}

function CardProduto({ post }: CardProdutoProps): JSX.Element {
  const { usuario } = useContext(AuthContext);
  const { increaseQuant } = useStore();

  const estoqueProduto = Math.floor(post.estoque);

  const handleAddToCart = () => {
    increaseQuant(post.id);
  };

  return (  
    <div className="card card-compact w-80 bg-green-800 shadow-xl rounded-lg">
      <figure>
        <img src={post.foto} alt={post.nome} className="rounded-t-lg min-h-60 max-h-60" />
      </figure>
      <div className="card-body ml-3">
        <p className="card-title text-2xl font-semibold text-white">{post.nome}</p>
        <p className="font-bold text-green-100">R$ {post.preco}</p>
        <p className="text-green-50 text-sm">Estoque disponível: {estoqueProduto}</p>
        <p className="text-green-50 text-sm">{post.descricao}</p>
        <div className="card-actions">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', paddingTop: '0px', paddingBottom: '0px', paddingLeft: '60px', paddingRight: '0px'}}>
            <button onClick={handleAddToCart} className="btn btn-primary bg-yellow-600 text-white rounded-lg w-44 h-9 py-0.5 text-center my-4 hover:bg-yellow-200 hover:text-yellow-900">Adicionar ao carrinho</button>
          </div>
          <div className="flex -ml-3">
            {(usuario.id === 1) && (
              <Link to={`/editarProduto/${post.id}`} className='w-full text-white bg-green-600 hover:bg-green-700 flex items-center justify-center py-2 rounded-bl-lg'>
                <button>Editar</button>
              </Link>
            )}
            {(usuario.id === 1) && (
              <Link to={`/deletarProduto/${post.id}`} className='text-white bg-red-600 hover:bg-red-700 w-full flex items-center justify-center rounded-br-lg'>
                <button>Deletar</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutoProps {
  post: Produto
}

function CardProduto({post}: CardProdutoProps) {
  // const date = new Date(post.dataValidade);
  // const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  const estoqueProduto = Math.floor(post.estoque);

  return (  
    <div className="card card-compact w-80 bg-green-800 shadow-xl rounded-lg">
      <figure><img src={post.foto} alt={post.nome} className="rounded-t-lg min-h-60 max-h-60"/></figure>
      <div className="card-body ml-3">
        <p className="card-title text-2xl font-semibold text-white">{post.nome}</p>
        <p className="font-bold text-green-100">R${post.preco}</p>
        <p className="text-green-50 text-sm">Estoque disponível: {estoqueProduto}</p>
        <p className="text-green-50 text-sm">{post.descricao}</p>
        <div className="card-actions">
          <button className="btn btn-primary bg-green-600 text-white rounded-lg w-32 h-9 py-0.5 text-center my-4 hover:bg-green-200 hover:text-green-900">Comprar</button>
          <div className="flex -ml-3">
            <Link to={`/editarProduto/${post.id}`} className='w-full text-white bg-green-600 hover:bg-green-700 flex items-center justify-center py-2 rounded-bl-lg'>
              <button>Editar</button>
            </Link>
            <Link to={`/deletarProduto/${post.id}`} className='text-white bg-red-600 hover:bg-red-700 w-full flex items-center justify-center rounded-br-lg'>
              <button>Deletar</button>
            </Link>
       </div>
        </div>
      </div>
    </div>
  )
}

export default CardProduto
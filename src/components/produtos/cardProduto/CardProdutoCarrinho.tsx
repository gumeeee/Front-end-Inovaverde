import Produto from '../../../models/Produto';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext';
import { useContext } from 'react';


interface CardProdutoProps {
  post: Produto;
}

function CardProduto({ post }: CardProdutoProps): JSX.Element {
  const { removerDoCarrinho } = useContext(CarrinhoContext); // Importe removerDoCarrinho do contexto

  const handleRemoveFromCart = () => {
    // Chame removerDoCarrinho para remover o item do carrinho
    removerDoCarrinho(post.id);
  };

  return (  
    <>
    <div className="mb-10 border-b pb-8 border-green-200">
    <div className="w-1/2 flex gap-24">

    <img
      src={post.foto} alt={post.nome}
      className="rounded-lg w-full h-full object-center object-cover"
    />
    <div className= "flex">
<p>qnt:</p>
<select className="mt-12 py-2 px-1 border border-gray-200 mr-6 focus:outline-none" style={{ height: '45px' }}>
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
        <option>07</option>
        <option>08</option>
        <option>09</option>
        <option>10</option>
      </select>
      </div>
  </div>

    <div className="md:pl-3 pr-10">
    <div className="flex items-center justify-between w-full pt-1">

      <p className="text-base font-black leading-none text-gray-800">
        {post.nome}
      </p>

    </div>
    <p className="text-xs leading-3 text-gray-600 pt-2">
      {post.descricao}
    </p>

    <div className="flex items-center justify-between pt-5 pr-6 gap-8">
      <div className="flex itemms-center">
        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
          Adicionar aos favoritos
        </p>
        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={handleRemoveFromCart}>
      Remover
    </p>
      </div>
      <p className="text-base font-black leading-none text-gray-800">
        R$ {post.preco}
      </p>
    </div>
  </div>
  </div>
  </>
  );
}

export default CardProduto;
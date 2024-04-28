/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from "react";
import CardProdutoCarrinho from "../cardProduto/CardProdutoCarrinho";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from '../../../contexts/CarrinhoContext';


function ModalCartProduto() {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const subtotal = carrinho.reduce((acc, produto) => acc + parseFloat(produto.preco), 0);
  const frete = carrinho.length === 0 ? 0 : 5.00;
  const taxa = carrinho.length === 0 ? 0 : 6.00;
  const total = subtotal + frete + taxa;

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;


  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado.');
      navigate('/');
    }
  }, [token]);

  const handleShowCart = () => {
    console.log('Conteúdo do carrinho:', carrinho);
  };

  useEffect(() => {
    // buscarProdutos();
  }, [carrinho.length]);
  

  return (
    <>
      <div>
        <div className="items-center grid justify-center ">
          <button onClick={() => setShow(!show)}>
          {carrinho.length !== 0 && (
  <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white ml-5">
    {carrinho.length}
  </p>
)}
            <svg
              color="white"
              xmlns="https://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 "
              stroke-width="2"
              stroke="currentColor"
              className="file:  h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
        {show && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 z-50">
            <div
              className="w-1/2 h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 sticky-0"
              id="chec-div"
            >
              <div
                className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
                id="checkout"
              >
                <div
                  className="flex md:flex-row flex-col justify-end"
                  id="cart"
                >
                  <div
                    className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                    id="scroll"
                  >
                    <div
                      className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                      onClick={() => setShow(!show)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-left"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                      </svg>
                      <p className="text-sm pl-2 leading-none">Voltar</p>
                    </div>
                    <p className="text-5xl font-black leading-10 text-green-800 pt-3">
                      Carrinho
                    </p>
                    <div className="md:flex items-center py-8">

                    <div className='md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center border-t py-8 border-green-200'>
      {carrinho.map((produto) => (
        <CardProdutoCarrinho key={produto.id} post={produto} />
      ))}
    </div>
                    </div>
                  </div>
                  <div className="xl:w-1/2 md:w-1/3 w-full bg-green-100 h-full">
                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                      <div>
                        <p className="text-4xl font-black leading-9 text-green-800">
                          Resumo
                        </p>
                        <div className="flex items-center justify-between pt-16">
                          <p className="text-base leading-none text-gray-800">
                            Subtotal
                          </p>
                          <p className="text-base leading-none text-gray-800">
                            R$ {subtotal.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-5">
                          <p className="text-base leading-none text-gray-800">
                            Frete
                          </p>
                          <p className="text-base leading-none text-gray-800">
                            R$ {frete.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-5">
                          <p className="text-base leading-none text-gray-800">
                            Taxa
                          </p>
                          <p className="text-base leading-none text-gray-800">
                            R$ {taxa.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                          <p className="text-2xl leading-normal text-gray-800">
                            Total
                          </p>
                          <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                          {total.toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => setShow(!show)}
                          className="text-base leading-none w-full py-5 bg-green-800 border-green-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 text-white rounded-lg hover:bg-green-600"
                        >
                          Comprar
                        </button>

                        <button
                          onClick={handleShowCart}
                          className="text-base leading-none w-full py-5 bg-blue-800 border-blue-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 text-white rounded-lg hover:bg-blue-600"
                        >
                          Mostrar Carrinho
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
      </style>
    </>
  );
}

export default ModalCartProduto;

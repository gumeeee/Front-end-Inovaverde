import { useState } from "react";

function ModalCartProduto() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <div className="items-center grid justify-center ">
          <button onClick={() => setShow(!show)}>
            <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white ml-5">
              2
            </p>
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
          <div className="justify-end w-full">
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
                    <div className="md:flex items-center mt-14 py-8 border-t border-green-200">
                      <div className="h-full w-1/3">
                        <img
                          src="https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="rounded-lg w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="md:pl-3 md:w-3/4 w-full">
                        <div className="flex items-center justify-between w-full pt-1">
                          <p className="text-base font-black leading-none text-gray-800">
                            Tomate
                          </p>
                          <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
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
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          Produto agrícola
                        </p>

                        <div className="flex items-center justify-between pt-5 pr-6">
                          <div className="flex itemms-center">
                            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                              Adicionar aos favoritos
                            </p>
                            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                              Remover
                            </p>
                          </div>
                          <p className="text-base font-black leading-none text-gray-800">
                            R$ 3.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex items-center py-8 border-t border-b border-green-200">
                      <div className="h-full w-1/3">
                        <img
                          src="https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="rounded-lg w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="md:pl-3 md:w-3/4 w-full">
                        <div className="flex items-center justify-between w-full pt-1">
                          <p className="text-base font-black leading-none text-gray-800">
                            Maçã Verde
                          </p>
                          <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
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
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          Produto agrícola
                        </p>

                        <div className="flex items-center justify-between pt-5 pr-6">
                          <div className="flex itemms-center">
                            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                              Adicionar aos favoritos
                            </p>
                            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                              Remover
                            </p>
                          </div>
                          <p className="text-base font-black leading-none text-gray-800">
                            R$ 5.50
                          </p>
                        </div>
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
                            R$ 8.50
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-5">
                          <p className="text-base leading-none text-gray-800">
                            Frete
                          </p>
                          <p className="text-base leading-none text-gray-800">
                            R$ 5.00
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-5">
                          <p className="text-base leading-none text-gray-800">
                            Taxa
                          </p>
                          <p className="text-base leading-none text-gray-800">
                            R$ 6.00
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                          <p className="text-2xl leading-normal text-gray-800">
                            Total
                          </p>
                          <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                            R$ 19.50
                          </p>
                        </div>
                        <button
                          onClick={() => setShow(!show)}
                          className="text-base leading-none w-full py-5 bg-green-800 border-green-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 text-white rounded-lg hover:bg-green-600"
                        >
                          Comprar
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

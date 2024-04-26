import React from 'react';
import ListaProdutos from '../../components/produtos/listaProduto/ListaProduto';

function Loja() {
  return (
    <>
    <div className="flex justify-center">
        <div className='text-white'>
              <div className="bg-sustainability bg-blend-soft-light bg-gray-800 bg-cover object-fit">
                <div className="flex items-center justify-center pt-40">
                  <h1 className="text-white text-7xl font-bold opacity-100 text-center px-20 mt-20">Nossa loja</h1>
                </div>
                <div className="flex items-end justify-center pb-72">
                  <h2 className="text-white text-3xl font-bold opacity-100 text-center px-20 mt-20">Desde frutas e vegetais cultivados de forma orgânica até maneiras de trazer a energia renovável até sua residência.</h2>
                </div>
              </div>
        </div>
    </div>
      <ListaProdutos />
    </>
  )
}

export default Loja
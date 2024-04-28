import React, { createContext, useState } from 'react';
import Produto from '../models/Produto';

type CarrinhoContextType = {
  carrinho: Produto[];
  setCarrinho: React.Dispatch<React.SetStateAction<Produto[]>>;
  adicionarAoCarrinho: (produto: Produto) => void;
  removerDoCarrinho: (idProduto: number) => void;
};

export const CarrinhoContext = createContext<CarrinhoContextType>({
  carrinho: [],
  setCarrinho: () => {},
  adicionarAoCarrinho: () => {},
  removerDoCarrinho: () => {},
});

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = sessionStorage.getItem('carrinho');
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((carrinhoAtual) => {
      const novoCarrinho = [...carrinhoAtual, produto];
      sessionStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
      return novoCarrinho;
    });
  };

  const removerDoCarrinho = (idProduto) => {
    setCarrinho((carrinhoAtual) => {
      const novoCarrinho = carrinhoAtual.filter(produto => produto.id !== idProduto);
      sessionStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
      return novoCarrinho;
    });
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho, adicionarAoCarrinho, removerDoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
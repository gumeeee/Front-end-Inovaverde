import React, { createContext, useContext, useEffect, useState } from 'react';
import Produto from '../models/Produto';
import { AuthContext } from './AuthContext';

type CarrinhoContextType = {
  carrinho: Produto[];
  setCarrinho: React.Dispatch<React.SetStateAction<Produto[]>>;
  adicionarAoCarrinho: (produto: Produto) => void;
  removerDoCarrinho: (idProduto: number) => void;
  atualizarQuantidadeCarrinho: (idProduto: number, novaQuantidade: number) => void; // Adicione esta linha
};

export const CarrinhoContext = createContext<CarrinhoContextType>({
  carrinho: [],
  setCarrinho: () => {},
  adicionarAoCarrinho: () => {},
  removerDoCarrinho: () => {},
  atualizarQuantidadeCarrinho: () => {}, // Adicione esta linha
});

export function CarrinhoProvider({ children }) {

  const { usuario } = useContext(AuthContext); // Use o AuthContext para obter o usuário atual


  
  const atualizarQuantidadeCarrinho = (idProduto, novaQuantidade) => {
    setCarrinho(carrinho.map(produto => 
      produto.id === idProduto ? { ...produto, quantidadeCarrinho: novaQuantidade } : produto
    ));
  };

  useEffect(() => {
    // Quando o usuário muda, limpa o carrinho
    if (usuario.id === 0) { // Verifique se o usuário está deslogado
      setCarrinho([]);
      sessionStorage.removeItem('carrinho');
    }
  }, [usuario]); // Adicione o usuário como dependência do useEffect

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
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho, adicionarAoCarrinho, removerDoCarrinho, atualizarQuantidadeCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
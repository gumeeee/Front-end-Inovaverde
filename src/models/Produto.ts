import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  preco: number; //pode errado (BIG DECIMAL)
  descricao: string;
  estoque: number; //pode errado (INT)
  dataValidade: Date; //pode errado (DATE)
  categoria: Categoria | null;
  usuario: Usuario | null;
}
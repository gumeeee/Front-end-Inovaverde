import Produto from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  creditoCarbono: number;
  produto?: Produto | null;
}
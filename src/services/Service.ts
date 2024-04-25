import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const api = axios.create({
  baseURL: 'https://projeto-integrador-inova-verde-hz2w.onrender.com/'
})

export const cadastrarUsuario = async(url: string, dados: object, setDados: Dispatch<SetStateAction<any>>) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }
  
  export const login = async(url: string, dados: object, setDados: Dispatch<SetStateAction<any>>) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }
  
  export const buscar = async(url: string, setDados: Dispatch<SetStateAction<any>>, header: object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
  }
  
  export const cadastrar = async(url: string, dados: object, setDados: Dispatch<SetStateAction<any>>, header: object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
  }
  
  export const atualizar = async(url: string, dados: object, setDados: Dispatch<SetStateAction<any>>, header: object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
  }
  
  export const deletar = async(url: string, header: object) => {
    await api.delete(url, header)
  }

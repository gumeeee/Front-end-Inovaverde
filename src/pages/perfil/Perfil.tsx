import  { useContext, useEffect, useState } from 'react'
import loginLogo from '../../assets/sustainability.jpg'
// import { buscar } from '../../services/Service'
import { useNavigate } from 'react-router-dom';
// import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../contexts/AuthContext';



function Perfil() {
  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
      if (usuario.token === "") {
          alert('Você precisa estar logado')
          navigate("/login")
      }
  }, [usuario.token])

  if (!usuario) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" />
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-green-500 text-white text-2xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
        <p>Créditos de carbono: 10</p>
      </div>


    </div>
  )
}

export default Perfil
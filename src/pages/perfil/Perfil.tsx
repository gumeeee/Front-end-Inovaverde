import  { useContext, useEffect } from 'react'
import loginLogo from '../../assets/sustainability.jpg'
// import { buscar } from '../../services/Service'
import { useNavigate } from 'react-router-dom';
// import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../contexts/AuthContext';
import Avatar from '../../components/avatar/Avatar.tsx';




function Perfil() {
  const navigate = useNavigate()

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
    <div className='z-2 container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" />
      <div className='justify-center items-center relative pl-24' style={{ position: 'relative', left: '86%', transform: 'translateX(-50%)', top: '-110px' }}>
  <Avatar foto={usuario.foto} size="extrabig" bordercolour = "white"/>
</div>
      <div className="relative mt-[-12rem] h-72 flex flex-col bg-green-500 text-white text-2xl items-center justify-center z-[-1]">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
        <p>Créditos de carbono: {usuario.creditoCarbono}</p>
      </div>


    </div>
  )
}

export default Perfil
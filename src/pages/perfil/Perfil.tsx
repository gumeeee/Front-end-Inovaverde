import  { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import loginLogo from '../../assets/login.jpg'
import { buscar } from '../../services/Service'



function Perfil() {
    const {usuario, setUsuario} = useContext(AuthContext);+

    useEffect(
      ()=>{
        const fetchData = async()=>{
        try {
          if ( usuario.id !== 0) {
            await buscar(`/usuarios/${usuario.id}`, setUsuario, {
                headers: {
                  'Authorization': usuario.token
                }
              });
          }
        } catch (error) {
          alert(`erro: ${error}`)
        }
      }
      fetchData()
    },[usuario.token, setUsuario])



  if(!usuario){
 return <div>
  Carregando...
 </div>
  }
  function handleChangeCardbonoValue() {
    setUsuario({
      ...usuario,
      creditoCarbono: usuario?.creditoCarbono? usuario?.creditoCarbono + 5: 5
    })
}
  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" />
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
        <p>Credito Carbono: {usuario.creditoCarbono}</p>
      </div>


      <button className='border-2 border-black items-center justify-center mx-auto relative z-10 flex flex-col hover:bg-gray-500' onClick={handleChangeCardbonoValue}>aaaaa</button>


    </div>
  )
}

export default Perfil
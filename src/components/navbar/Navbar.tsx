import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-green-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Inova Verde</div>

              <div className='flex gap-4'>
              <Link className='hover:underline' to="/home">Home</Link>
              <Link className='hover:underline' to="/sobre">Sobre</Link>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Contato</div>
              <Link className='hover:underline' to="/login">Login</Link>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
  const { usuario } = useContext(AuthContext);
  
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <div className="card w-auto bg-green-900 text-primary-content text-white">
        <div className="card-body">
          <h2 className="card-title ml-3 mt-5 text-xl font-semibold">{categoria.nome}</h2>
          <p className="mx-3">{categoria.subcategoria}</p>
          <div className="card-actions text-end">
            <Link to={'/produtos'} >
              <button className='btn mr-5 my-4 bg-green-600 text-white rounded-lg w-32 h-9 text-center hover:bg-green-200 hover:text-green-900'>Veja os produtos</button>
            </Link>
            <div className="flex">
            {(usuario.id === 1) && (
              <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-green-600 hover:bg-green-800 flex items-center justify-center py-2'>
                <button>Editar</button>
              </Link>
            )}
            {(usuario.id === 1) && (
              <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-600 hover:bg-red-700 w-full flex items-center justify-center'>
                <button>Deletar</button>
              </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCategorias
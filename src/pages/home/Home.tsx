import { useContext } from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';


function Home() {

  const {usuario} = useContext(AuthContext);

    return (
        <>
        <div className="cor-fundo flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Olá, {usuario.nome}</h2>
              <p className='text-xl'>Da agricultura familiar para a sua casa!</p>

              <div className="flex justify-around gap-4">

              <Link to= "/produtos" className="hover:underline"> <button className='rounded bg-white text-green-800 py-2 px-4'>Ver produtos</button></Link>
              </div>
            </div>

            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />

            </div>
          </div>
        </div>

      </>
    );
}
export default Home;
import { useContext } from 'react';
import homeLogo from '../../assets/logologo.svg';
import ecommerce from '../../assets/imgecommerce.jpg';
import arara from '../../assets/arara.jpg';
import planta from '../../assets/sustainability.jpg';
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
              <h2 className='text-5xl font-bold'>Olá {usuario.nome},</h2>
              <h3 className='text-5xl font-bold'>você está na Inova Verde!</h3>
              <p className='text-xl'>Do produtor sustentável para a sua casa.</p>

              <div className="flex justify-around gap-4">

              <Link to= "/produtos" className="hover:underline"> <button className='rounded bg-white text-green-800 py-2 px-4'>Veja nossa loja</button></Link>
              </div>
            </div>

            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3 z-auto' />

            </div>
          </div>
        </div>
        <div>
          <section className="z-0 mt-8">
            <div className="flex my-4">
              <div className="pl-20">
                <h4 className="text-blue-900 font-serif text-2xl font-bold">Quem somos</h4>
                <img src={ecommerce} alt="" className='z-0 w-4/5 mt-2' />
              </div>
              <div className="text-justify mt-10 pr-20">
                <p>Somos uma empresa apaixonada por sustentabilidade e inovação, buscando soluções criativas para os desafios ambientais atuais. Nossa missão é tornar o mundo um lugar melhor, promovendo o consumo consciente e a preservação do meio ambiente.
                Nosso e-commerce oferece uma ampla variedade de produtos agrícolas e naturais, cuidadosamente selecionados para promover a sustentabilidade em todas as etapas. Acreditamos que cada escolha conta, e é por isso que incentivamos nossos clientes a fazerem compras conscientes e a participarem ativamente na redução das emissões de carbono.
                Ao comprar conosco, você não apenas adquire produtos de alta qualidade, mas também recebe cashback na forma de créditos de carbono, que podem ser usados para contribuir com projetos ambientais ou mantidos para reduzir sua própria pegada de carbono.</p>
              </div>
            </div>
          </section>
          <section className="mt-8">
            <div className="flex my-4 px-20">
              <div className="text-justify mt-10 mr-20">
                <p>Nossa missão principal é promover ativamente a transformação do mundo em um lugar melhor, onde a sustentabilidade e a inovação são os pilares fundamentais.
                   Nosso compromisso é buscar soluções criativas para os desafios ambientais atuais, incentivando o consumo consciente e a preservação do meio ambiente em todas as nossas atividades.</p>
                <br />
                <p>Nossa meta é nos tornarmos líderes globais na conscientização ambiental e no fornecimento de produtos sustentáveis, impulsionando a mudança positiva em direção a um futuro mais verde e sustentável.</p>
                <br />
                <h5 className="font-bold font-serif text-blue-500">Nossos valores: </h5>
                <ol className="list-decimal pl-10">
                  <li>Sustentabilidade: Comprometimento com práticas ecológicas e responsáveis em todas as nossas operações.</li>
                  <li>Inovação: Busca contínua por soluções criativas e eficazes para os desafios ambientais.</li>
                  <li>Qualidade: Oferecer produtos agrícolas e naturais de alta qualidade, cuidadosamente selecionados para promover a sustentabilidade.</li>
                  <li>Consciência: Educar e inspirar nossos clientes a fazerem escolhas conscientes e a participarem ativamente na redução das emissões de carbono.</li>
                  <li>Compromisso: Apoiar e incentivar projetos ambientais, recompensando nossos clientes com créditos de carbono para cada compra realizada.</li>
                  <li>Colaboração: Trabalhar em parceria com comunidades locais, organizações e clientes para alcançar objetivos comuns de preservação ambiental.</li>
                  <li>Transparência: Manter uma comunicação aberta e honesta sobre nossas práticas e impactos ambientais.</li>
                </ol>
              </div>
              <div className="justify-end w-full relative">
                <h4 className="text-blue-900 font-serif text-2xl text-end font-bold">Nossa missão</h4>
                <img src={arara} alt="" className='w-full mt-2 absolute end' />
              </div>
            </div>
          </section>
          <section className="mt-8">
            <div className="relative mt-20">
              <img src={planta} className="object-cover rounded-md z-0" alt="" />
              <div className="absolute inset-0 bg-green-900 opacity-60 rounded-md">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-3xl font-bold opacity-100 text-center px-20">Junte-se a nós na jornada rumo a um futuro mais verde e sustentável. Vamos inovar juntos, preservando o planeta para as gerações futuras!</h2>
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-80">
                  <h1 className="text-white text-7xl font-bold opacity-100 text-center px-20">Inova Verde</h1>
                </div>
              </div>
            </div>
          </section>
        </div>


      </>
    );
}
export default Home;
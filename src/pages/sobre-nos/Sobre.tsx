import React from 'react'
import ecommerce from '../../assets/imgecommerce.jpg';

function Sobre() {
  return (
    <>

<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', paddingTop: '20px', paddingRight: '50px', paddingBottom: '40px', paddingLeft: '50px' }}>
  <div style={{ padding: '10px' }}>
  <h4 className="text-blue-900 font-serif text-2xl font-bold">Quem somos</h4>
                <img src={ecommerce} alt="" className='z-0 mt-2' />
  </div>
  <div style={{ padding: '10px' }}>
  <p className="text-justify mt-8">Somos uma empresa apaixonada por sustentabilidade e inovação, buscando soluções criativas para os desafios ambientais atuais. Nossa missão é tornar o mundo um lugar melhor, promovendo o consumo consciente e a preservação do meio ambiente.
                Nosso e-commerce oferece uma ampla variedade de produtos agrícolas e naturais, cuidadosamente selecionados para promover a sustentabilidade em todas as etapas. Acreditamos que cada escolha conta, e é por isso que incentivamos nossos clientes a fazerem compras conscientes e a participarem ativamente na redução das emissões de carbono.
                Ao comprar conosco, você não apenas adquire produtos de alta qualidade, mas também recebe cashback na forma de créditos de carbono, que podem ser usados para contribuir com projetos ambientais ou mantidos para reduzir sua própria pegada de carbono.
  </p>
  </div>
</div>

    </>
  )
}

export default Sobre
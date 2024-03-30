import './Servicos.css'

export function Servicos() {
    return (
        <>
            <section className='main-section'>
                <div className="main-bg">
                    <img src="/public/imagens/Serviços - Fundo IMG.png" alt="" />
                </div>

                <div className="main-content">
                    <h2>Conheça os Nossos Serviços</h2>

                    <p>
                        Explore nossa paixão pela culinária
                        e deixe-se encantar pela arte da
                        comida em nosso restaurante.
                    </p>

                    <button className="main-btn">Reservar uma mesa</button>
                </div>
            </section>

            <section className='services-section'>

                <div className='left-box'>
                    <h3 className='tittle'>Reservas</h3>
                    <img className='icon' src="/public/icones/Icon-Dinner.svg" alt="" />
                    <p className='text-serv'>
                        Saboreie momentos inesquecíveis em nosso restaurante,
                        onde cada mordida é uma experiência culinária única,
                        em um ambiente acolhedor e encantador.
                    </p>
                </div>

                <div className='middle-box'>
                    <h3 className='tittle'>Buffet</h3>
                    <img className='icon' src="/public/icones/Icon-Buffet.svg" alt="" />
                    <p className='text-serv'>
                        Explore uma variedade de sabores e escolha seus favoritos
                        em nosso buffet irresistível, onde a fartura e a qualidade
                        se encontram para satisfazer todos os gostos e apetites.
                    </p>
                </div>

                <div className='right-box'>
                    <h3 className='tittle'>Delivery</h3>
                    <img className='icon' src="/public/icones/Icon-Delivery.svg" alt="" />
                    <p className='text-serv'>
                        Levamos o sabor até você! Desfrute da conveniência de nossas 
                        deliciosas refeições no conforto do seu lar, com nosso serviço 
                        de entrega rápido e eficiente.
                    </p>
                </div>

            </section>
        </>
    )
}
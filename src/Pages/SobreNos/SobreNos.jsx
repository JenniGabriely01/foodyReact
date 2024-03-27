import './SobreNos.css'

export function Sobre() {
    return (
        <>

            <section className="centralizando">
                <div className="conteudo">
                    <img className="imgPrincipal" src="./public/imagens/imagemSobre.png" alt="" />
                    <h2 className="nossa-historia">Nossa Hstória</h2>


                    <div className="texto-conteudo">
                        <h3>"O Foody: Uma Jornada de Sabores"</h3>
                        <p>No coração da cidade, erguia-se o Foody, um modesto restaurante que cativava os paladares com suas criações simples,
                            porém cheias de alma. Fundado por um chef apaixonado e sua família, o Foody rapidamente se tornou um refúgio gastronômico para os moradores locais
                            e viajantes sedentos por autenticidade culinária. Com pratos que contavam histórias de ingredientes frescos e
                            técnicas artesanais</p>
                    </div>

                    <div className="planta-enfeite">
                        <img src="/public/imagens/planta.svg" alt="" />
                    </div>

                </div>
            </section>

            <section className="melhores-produtos">

                <div className="text-melhores-produtos">
                    <h2>Temos os melhores ingredientes</h2>
                    <p>
                        mergulhe em uma experiência visual que celebra a qualidade e a frescura dos ingredientes que
                        usamos em cada prato. Deixe-se inspirar pelas imagens que contam a história de nossa
                        dedicação à excelência culinária.
                    </p>

                    <button>Saiba mais</button>
                </div>

                <div className="melhores-produtos-img">
                    <img src="/public/imagens/img-melhoresProd.svg" alt="" />
                </div>

                <div className='img-info'>
                    <img src="/public/imagens/Quote - IMG.svg" alt="" />
                </div>

                <div className='position-info'>
                    <h2>O que falam sobre nós?</h2>

                    <div className='text-info'>
                        <p>
                            Visitei o restaurante recentemente e fiquei impressionado com a qualidade da comida e o serviço
                            excepcional. Cada prato que provei estava delicioso, e a apresentação era impecável. A equipe foi
                            muito atenciosa e prestativa, garantindo uma experiência gastronômica memorável. Com certeza,
                            voltarei em breve e recomendo a todos os amantes da boa comida.
                        </p>
                    </div>
                    
                    <button className='reviews-btn'>Ver mais avaliações</button>
                </div>

            </section>
        </>
    )
}
import { useEffect, useState } from "react";
import './Home.css'

export function Home() {
    const [infoBanner, setInfoBanner] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        // Requisição para o endpoint do banner
        fetch("http://localhost:3000/banner")
            .then((response) => response.json())
            .then((data) => setInfoBanner(data))
            .catch((error) => console.error('Erro ao carregar o banner:', error));

        // Requisição para o endpoint do menu
        fetch("http://localhost:3000/menu")
            .then((response) => response.json())
            .then((data) => setMenu(data))
            .catch((error) => console.error('Erro ao carregar o menu:', error));
    }, []);

    console.log(infoBanner);
    console.log(menu);

    return (
        <>
            <section>
                {infoBanner.map((info) => (
                    <div className="Banner-inicial" key={info.id}>

                        <div className="textos-home">
                            <h1>{info.titulo}</h1>
                            <button>Reservar uma mesa</button>
                        </div>

                        <div className="img-banner">
                            <img src={info.imgBanner} alt="" />
                        </div>
                    </div>
                ))}
            </section>


            <main>
                <div className="texto-menu">
                    <h2>Nosso Menu</h2>
                    <p>
                        Bem-vindo ao nosso oásis gastronômico! Aqui,
                        cada prato é uma jornada de sabores, cuidadosamente
                        preparados para encantar seu paladar.
                    </p>
                </div>

                <section>
                    {menu.length > 0 && (
                        <div className="pratos-menu">
                            {/* Renderizar o prato de risoto */}
                            <div className="prato">
                                <div className="imagem-menu">
                                    <img src={menu[0]?.imagemRisoto} alt="risoto" />
                                </div>
                                <div className="text-cardapio">
                                    <h2>{menu[0]?.nomePratoRisoto}</h2>
                                    <p>{menu[0]?.descricaoRisoto}</p>
                                </div>
                            </div>

                            {/* Renderizar o prato de salada */}
                            <div className="prato">
                                <div className="text-cardapio">
                                    <h2>{menu[1]?.nomePratoSalada}</h2>
                                    <p>{menu[1]?.descricaoSalada}</p>
                                </div>
                                <div className="imagem-menu">
                                    <img src={menu[1]?.imagemSalada} alt="salada" />
                                </div>
                            </div>

                            {/* Renderizar o prato de arroz */}
                            <div className="prato">
                                <div className="imagem-menu">
                                    <img src={menu[2]?.imagemArroz} alt="arroz" />
                                </div>
                                <div className="text-cardapio">
                                    <h2>{menu[2]?.nomePratoArroz}</h2>
                                    <p>{menu[2]?.descricaoArroz}</p>
                                    <button>Menu Completo</button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

            </main>
        </>
    );
}

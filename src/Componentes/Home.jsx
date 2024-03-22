import { useEffect, useState } from "react";
import './Home.css'

export function Home() {
    const [infoBanner, setInfoBanner] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/banner")
            .then((response) => response.json())
            .then((data) => setInfoBanner(data))
    }, []);

    console.log(infoBanner);

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
                    <h2>Nosso  Menu</h2>
                    <p>
                        Bem-vindo ao nosso oásis gastronômico! Aqui,
                        cada prato é uma jornada de sabores, cuidadosamente
                        preparados para encantar seu paladar.
                    </p>
                </div>
            </main>
        </>


    );
}
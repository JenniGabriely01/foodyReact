import './Contato.css'

export function Contato() {
    return (
        <>
            <section className="Conteudo-Contato">
                <h2>Conheça nossas lojas</h2>

                <div className="lojas">

                    <div className="conteudoLoja">
                        <img src="./icones/Local.svg" alt="" />

                        <div className="text">

                            <h3>Rua das flores</h3>
                            <p>Número 31, Bairro  Jardim</p>
                        </div>
                    </div>


                    <div className="conteudoLoja">
                        <img src="./icones/Local.svg" alt="" />

                        <div className="text">

                            <h3>Estrada das Velas</h3>
                            <p>Número 890, Bairro Tulipa</p>
                        </div>
                    </div>

                    <div className="conteudoLoja">
                        <img src="./icones/Local.svg" alt="" />

                        <div className="text">

                            <h3>Rua das Rosas</h3>
                            <p>Número 4, Bairro Jude</p>
                        </div>
                    </div>

                </div>
            </section>


            <hr />


            <section className='faleConosco'>

                <h2>Fale Conosco</h2>

                <div className="conteudo-fale-conosco">

                    <div className="conteudos">
                        <img src="./icones/tel.png" alt="icone telefone" />
                        <h3>Telefone</h3>
                        <p>11 94345-6578</p>
                    </div>
                    
                    <div className="conteudos">
                        <img src="./icones/insta.png" alt="icone insta" />
                        <h3>Instagram</h3>
                        <p>@foody_</p>
                    </div>
                    <div className="conteudos">
                        <img src="./icones/email.png" alt="icone email" />
                        <h3>E-mail</h3>
                        <p>foody@gmail.com</p>
                    </div>

                </div>
            </section>
        </>
    )
}
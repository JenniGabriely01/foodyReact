import './Header.css'

export function Header() {
    return (
        <>
            <header className='header'>

                <div className="logo">
                    <img src="/imagens/Logo.svg" alt="Logo" />
                </div>

                <div className="nav">

                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="">Servicos</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="">Contato</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="/SobreNos">Sobre nós</a>
                        </li>
                    </ul>

                </div>


                <div className="icones-esquerda">
                    <img src="./icones/pesq.svg" alt="icone Pesquisa" />
                    <img src="./icones/icone-notificacao.svg" alt="icone Pesquisa" />
                    <button>Login</button>
                </div>
            </header>
        </>
    );
}
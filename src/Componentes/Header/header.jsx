import { Link } from 'react-router-dom';
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
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to="/Servicos">Servicos</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to="/Contato">Contatos</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to="/SobreNos">Sobre Nós</Link>
                        </li>
                    </ul> 

                </div>


                <div className="icones-esquerda">
                    <img src="./icones/pesq.svg" alt="icone Pesquisa" />
                    <img src="./icones/icone-notificacao.svg" alt="icone Pesquisa" />
                    <a href="/Login"> 
                    <button href="/Login">Login</button>
                    </a>
                </div>
            </header>
        </>
    );
}
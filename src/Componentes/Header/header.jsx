import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './Header.css'

export function Header() {
    const location = useLocation();

    // Função para verificar se a rota atual corresponde à rota fornecida
    const isCurrentRoute = (route) => {
        return location.pathname === route;
    };

    return (
        <>
             <header className={`header ${isCurrentRoute('/Servicos') ? 'absolute-header' : ''}`}>

                <div className="logo">
                    <img src="/imagens/Logo.svg" alt="Logo" />
                </div>

                <div className="nav">
                    <ul>
                        <li>
                            <Link to="/" className={isCurrentRoute("/") ? "active" : ""}>Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/Servicos" className={isCurrentRoute("/Servicos") ? "active" : ""}>Servicos</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/Contato" className={isCurrentRoute("/Contato") ? "active" : ""}>Contatos</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/SobreNos" className={isCurrentRoute("/SobreNos") ? "active" : ""}>Sobre Nós</Link>
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
import { Header } from "./Componentes/Header/header.jsx";
import { Footer } from "./Componentes/Footer/Footer.jsx"
import Router from './Router';
import './global.css'

export function App() {
    return (
        <>
        {/* aqui inicia os componentes(tudo que vai repitir em todas as paginas) */}
                <Router />
            <Footer />

        </>
    );
}


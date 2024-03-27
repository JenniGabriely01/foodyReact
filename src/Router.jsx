import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Componentes/Home";
import { Sobre } from "./Pages/SobreNos/SobreNos";
import { Servicos } from "./Pages/Servicos/Servicos";
import { Contato } from "./Pages/Contato/Contato";
import { Login } from "./Pages/Login/Login";
import { Header } from "./Componentes/Header/header";

const Router = () => {
    return (
        /* definindo rotas */
        <BrowserRouter>
                <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Servicos" element={<Servicos />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/SobreNos" element={<Sobre />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;
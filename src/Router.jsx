import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Componentes/Home";
import { Sobre } from "./Pages/SobreNos/SobreNos";

const Router = () => {
    return (
        /* definindo rotas */
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SobreNos" element={<Sobre />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;
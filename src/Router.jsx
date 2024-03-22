import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Componentes/Home";

const Router = () => {
    return (
        /* definindo rotas */
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;
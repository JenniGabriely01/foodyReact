import './Footer.css'

export function Footer() {
    return (
        <>
            <footer>

                <hr />
                <div className="footer">
                    
                    <div className="conteudo-direita">
                        <img src="/imagens/Logo.svg" alt="Logo" />
                        <p>Todos os direitos reservados</p>
                        
                            <img src="/icones/instagram.svg" alt="icone-instagram" />
                            <img src="/icones/face.svg" alt="icone-facebook" />
                            <img src="/icones/wpp.svg" alt="icone-whatsapp" />
                    </div>

                    <div className="infos">
                        <p>Politica de Privacidade</p>
                        <p>Central de Ajuda</p>
                        <p>Atendimentoa ao Cliente</p>
                        <p>Termos de uso</p>
                    </div>
                </div>

            </footer>

        </>
    )
}
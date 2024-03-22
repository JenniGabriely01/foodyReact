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
                        <p>Política de Privacidade</p>
                        <p>Central de Ajuda</p>
                        <p>Atendimento ao Cliente</p>
                        <p>Termos de Uso</p>
                    </div>
                </div>

                <div className="copyright">
                    <p>Copyright © 2024; Designed by <span>Jennifer & Kauã</span></p>
                </div>

            </footer>

        </>
    )
}
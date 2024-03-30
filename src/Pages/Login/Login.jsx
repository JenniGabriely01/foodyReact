import './Login.css';

export function Login() {
    
    return (
        <section>
            <div className="main-login">
                <img className='img1' src="./imagens/imagem-esquerda.svg" alt="prato" />

                <div className="conteudoLogin">

                    <h2>Bem-vindo de volta!</h2>
                    <p>Faça login para aproveitar.</p>


                    <h3>Nome de usuário ou e-mail</h3>
                    <input type="text" placeholder="Insira aqui..."/>

                    <h3>Senha</h3>
                    <input type="password" placeholder="Insira aqui..."/>
                    <button>Fazer Login</button>
                </div>

                <img className='img2' src="./imagens/imagem-direita.svg" alt="prato" />
            </div>
        </section>
    );
}
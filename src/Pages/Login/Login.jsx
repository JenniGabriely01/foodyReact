import React, { useState } from 'react';
import './Login.css';

export function Login() {
    // Estado para armazenar os dados de login
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    /* Estado para enviar mensagem de erro */
    const [errorMessage, setErrorMessage] = useState('');

    // Função para atualizar o estado com os dados de login
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // Atualiza o estado loginData com os novos valores
        setLoginData({
            ...loginData, // Mantém os valores anteriores
            [name]: value // Atualiza o campo específico (name) com o novo valor (value)
        });
    };

    // Função para lidar com o envio do formulário de login
    const handleLoginSubmit = (event) => {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        // Verifica se os campos de username e password estão preenchidos
        if (loginData.username && loginData.password) {

            console.log('Usuário:', loginData.username);
            console.log('Senha:', loginData.password);

            // Limpa os campos de username e password após o envio bem-sucedido
            setLoginData({
                username: '',
                password: ''
            });

            // Limpa a mensagem de erro, se houver
            setErrorMessage('');

        } else {
            // Define a mensagem de erro caso algum campo não esteja preenchido
            setErrorMessage('Por favor, preencha todos os campos!');
        }
    };

    return (
        <section>
            <div className="main-login">
                <img className='img1' src="./imagens/imagem-esquerda.svg" alt="prato" />

                <div className="conteudoLogin">
                    <h2>Bem-vindo de volta!</h2>
                    <p>Faça login para aproveitar.</p>

                    {/* Formulário de login */}
                    <form className="form" onSubmit={handleLoginSubmit}>
                        <h3>Nome de usuário ou e-mail</h3>
                        {/* Input para o usuário inserir o nome de usuário ou e-mail */}
                        <input
                            type="text"
                            name="username"
                            placeholder="Insira aqui..."
                            value={loginData.username} // Valor do campo é definido pelo estado loginData
                            onChange={handleInputChange} // Função para lidar com mudanças no input
                        />

                        <h3>Senha</h3>
                        {/* Input para o usuário inserir a senha */}
                        <input
                            type="password"
                            name="password"
                            placeholder="Insira aqui..."
                            value={loginData.password} // Valor do campo é definido pelo estado loginData
                            onChange={handleInputChange} // Função para lidar com mudanças no input
                        />
                        {/* Botão para enviar o formulário */}
                        <button type="submit">Fazer Login</button>
                        {/* Exibe a mensagem de erro se houver */}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </div>

                <img className='img2' src="./imagens/imagem-direita.svg" alt="prato" />
            </div>
        </section>
    );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null); // Para armazenar erros de validação
    const [emailError, setEmailError] = useState(false); // Verifica erro no campo de e-mail
    const [senhaError, setSenhaError] = useState(false); // Verifica erro no campo de senha

    useEffect(() => {
        // Faz uma requisição GET para o backend para buscar a lista de usuários
        axios.get('http://localhost:3001/api/usuarios')
            .then(response => setUsuarios(response.data))
            .catch(error => console.error("Erro ao buscar usuários:", error));
    }, []);

    // Função para abrir o modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
        setError(null); // Limpar o erro ao abrir o modal
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEmailError(false); // Limpar erros ao fechar
        setSenhaError(false);
    };

    // Função para verificar se as credenciais existem
    const handleLogin = () => {
        const usuarioEncontrado = usuarios.find(
            (user) => user.email === email && user.senha === senha
        );

        if (usuarioEncontrado) {
            // Login bem-sucedido, redirecionar ou mostrar usuário logado
            alert(`Bem-vindo, ${usuarioEncontrado.nome}!`);
            // Aqui você pode redirecionar para uma página diferente (SPA)
            window.location.href = "/usuario_logado.png"; // Supondo que você queira exibir um usuário logado
            handleCloseModal();
        } else {
            // Se não encontrar o usuário, mostrar erro
            setError("Usuário ou senha incorreto");
            setEmailError(true); // Destacar erro de email
            setSenhaError(true); // Destacar erro de senha
        }
    };

    return (
        <div className="App">
            <header className='header'>
                <h1>FaculHub – O Curso Certo Para Você</h1>
                <div className='logo'>
                    <img src='instagram.webp' alt='instagram' className='logo' />
                    <img src='twitter.png' alt='twitter' className='logo'/>
                </div>
            </header>

            <div className='colunas'>
                <div className='esquerdo'>
                    <button onClick={handleOpenModal}>
                        <strong>Entrar</strong>
                    </button>
                    <br />
                    <img src='logo_faculhub.png' alt='logo' className='logoSite'/>
                    <p>FaculHub</p>
                    <p>Número de incrições:</p>
                </div>

                {/* Modal de Login */}
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Login</h2>
                            {error && <p className="error">{error}</p>}
                            <div className="modal-body">
                                <label htmlFor="email">E-mail:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Digite seu e-mail"
                                    className={emailError ? "input-error" : ""}
                                />
                                <label htmlFor="senha">Senha:</label>
                                <input
                                    type="password"
                                    id="senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder="Digite sua senha"
                                    className={senhaError ? "input-error" : ""}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    onClick={handleCloseModal}
                                    className="cancel-button"
                                >
                                    Cancelar
                                </button>
                                <button onClick={handleLogin} className="login-button">
                                    Entrar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <main>
                    <div className='cursomain'>
                        <h1>Cursos</h1>
                    </div>

                    <div className='cursoBorda'>
                        <p>Eletromecânica</p>
                        <img src='eletromecanica.png' alt='eletromecanica' />
                        <br />
                        <div className='comentarioLike'>
                            <img src='flecha_cima_vazia.svg' alt='flecha cima vazia'/>
                            <p>0</p>
                            <img src='chat.svg' alt='chat' />
                            <p>0</p>
                        </div>
                    </div>

                    <div className='cursoBorda'>
                        <p>Inteligência Artificial</p>
                        <img src='inteligencia_artificial.png' alt='IA' />
                        <br />
                        <div className='comentarioLike'>
                            <img src='flecha_cima_vazia.svg' alt='flecha cima vazia'/>
                            <p>0</p>
                            <img src='chat.svg' alt='chat' />
                            <p>0</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
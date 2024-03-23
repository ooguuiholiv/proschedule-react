import React, { useState } from 'react';
import LoginForm from "../LoginForm";
import RecoveryForm from "../RecoveryForm";
import Register from "../Register";
import Pavel from '../../assets/pavel.jfif';
import Logo from '../../assets/logo.png';
import Dashboard from '../Dashboard/Dashboard';
import './index.css';

export default function LoginPage() {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showRecoveryForm, setShowRecoveryForm] = useState(false);
    const [username, setUsername] = useState(''); // Novo estado para armazenar o nome de usuário
    const [password, setPassword] = useState(''); // Novo estado para armazenar a senha
    const [showDashboard, setShowDashboard] = useState(false); // Novo estado para controlar a exibição do Dashboard
    const [loginError, setLoginError] = useState(false); // Novo estado para controlar a exibição da mensagem de erro

    const handleForgotPasswordClick = () => {
        setShowLoginForm(false);
        setShowRegisterForm(false);
        setShowRecoveryForm(true);
    };

    const handleRegisterClick = () => {
        setShowLoginForm(false);
        setShowRegisterForm(true);
        setShowRecoveryForm(false);
    };

    const handleLoginClick = async () => {
        // Envia solicitação para verificar as credenciais
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                setShowDashboard(true); // Exibi o Dashboard se o login for bem-sucedido
                setLoginError(false); // Reseta o estado de erro
            } else {
                setLoginError(true); // Exibi mensagem de erro se as credenciais estiverem incorretas
            }
        } catch (error) {
            console.error('Erro ao tentar fazer login:', error);
        }
    };

    return (
        <div className="container">
            <img className='pavel' src={Pavel} alt="Pavel" />
            <div className="container-2">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div>
                    {/* Se showDashboard for verdadeiro, exibir o Dashboard */}
                    {showDashboard ? (
                        <Dashboard />
                    ) : (
                        <>
                            {showLoginForm && !showRegisterForm && !showRecoveryForm && (
                                <LoginForm 
                                    setUsername={setUsername} 
                                    setPassword={setPassword} 
                                    handleLoginClick={handleLoginClick} 
                                    loginError={loginError} 
                                />
                            )}
                            {showRegisterForm && !showLoginForm && !showRecoveryForm && <Register />}
                            {showRecoveryForm && <RecoveryForm />}
                            {!showRegisterForm && !showRecoveryForm && (
                                <div className='overPass'>
                                    <a onClick={handleForgotPasswordClick}><u>Esqueci minha senha</u></a>
                                </div>
                            )}
                            {!showRegisterForm && !showRecoveryForm && (
                                <div className='buttons'>
                                    <button onClick={handleLoginClick}>Login</button>
                                    <button onClick={handleRegisterClick}>Register</button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import LoginForm from "../LoginForm";
import RecoveryForm from "../RecoveryForm"; 
import pavel from '../../assets/pavel.jfif';
import Logo from '../../assets/logo.png';
import './index.css';

export default function LoginPage() {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleForgotPasswordClick = () => {
        setShowLoginForm(false); // Altera o estado para mostrar o formulário de recuperação de senha
    };

    return (
        <div className="container">
            <img src={pavel} alt="Pavel" />
            <div className="container-2">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div>
                    {showLoginForm ? (
                        <LoginForm />
                    ) : (
                        <RecoveryForm />
                    )}
                    {showLoginForm && (
                        <div className='overPass'>
                            <a onClick={handleForgotPasswordClick}><u>Esqueci minha senha</u></a>
                        </div>
                    )}
                    {showLoginForm && (
                        <div className='buttons'>
                            <button>Login</button>
                            <button>Register</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

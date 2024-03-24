import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../Buttons/index';
import LogoLogin from '../LogoLogin';
import './indexLogin.css';

export default function LoginForm({ onForgotPasswordClick, onRegisterClick }) { 
    const handleButtonClick = () => {
        console.log('Botão clicado');
    };

    return (
        <div className="container-login-form">
            <LogoLogin/>
            <p>INFORME SUAS CREDENCIAIS DE ACESSO</p>
            <div className="input-container-login-form">
                <div className="icon">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="divider"></div>
                <input type="text" className="input" placeholder="Usuário/ E-mail" />
            </div>
            <div className="input-container-login-form">
                <div className="icon">
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="divider"></div>
                <input type="password" className="input" placeholder="Senha" />
            </div>
            <div className='overPass'>
                <a onClick={onForgotPasswordClick}><u>Esqueci minha senha</u></a>
            </div>
            <div className="button-container">
                <Buttons 
                    buttonText="Login" 
                    onClick={handleButtonClick} 
                />
                <Buttons 
                    buttonText="Register" 
                    onClick={onRegisterClick} // Chama a onRegisterClick ao clicar em "Register"
                />
            </div>
        </div>
    );
}

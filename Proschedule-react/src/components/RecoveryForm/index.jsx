import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../Buttons/index';
import LogoLogin from '../LogoLogin';
import './indexRecovery.css';

export default function RecoveryForm({ onBackToLoginClick, onRecoverySuccess }) {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleRecoverPass = () => {
        // Envia o email para o servidor
        fetch('URL_DO_SERVIDOR', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => {
            if (response.ok) {
                console.log('Email enviado com sucesso');
                // Chama a função onRecoverySuccess após o sucesso da recuperação
                onRecoverySuccess();
            } else {
                console.error('Falha ao enviar email');
                // Trata a falha de envio
                onRecoverySuccess(); // Chama a função mesmo em caso de falha
            }
        })
        .catch(error => {
            console.error('Erro ao enviar email:', error);
            // Trata o erro de envio
            onRecoverySuccess(); // Chama a função mesmo em caso de erro
        });
    };

    return (
        <div className="container-recovery-form">
            <LogoLogin />
            <>
                <p>INFORME SEU E-MAIL DE USUÁRIO</p>
                <div className="input-container-recovery-form">
                    <div className="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="divider"></div>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="E-mail" 
                        value={email} 
                        onChange={handleEmailChange} 
                    />
                </div>
                <div className='button-container'>
                    <Buttons
                        buttonText="Recuperar Senha"
                        onClick={handleRecoverPass}
                    />
                    <Buttons
                        buttonText="Voltar para login"
                        onClick={onBackToLoginClick}
                    />
                </div>
            </>
        </div>
    );
}

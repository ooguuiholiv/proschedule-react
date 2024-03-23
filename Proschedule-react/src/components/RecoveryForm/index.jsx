import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './indexRecovery.css';
import VerifyEmail from '../VerifyEmail';

export default function RecoveryForm() {
    const [email, setEmail] = useState('');
    const [showVerifyEmail, setShowVerifyEmail] = useState(false);

    const handleRecoverPass = async () => {
        try {
            await fetch('http://localhost:3000/auth/recover-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            // Após a tentativa de recuperação da senha, exibe o componente VerifyEmail
            setShowVerifyEmail(true);
        } catch (error) {
            console.error('Erro ao tentar recuperar senha:', error);
            // Se ocorrer um erro, ainda assim, exibe o componente VerifyEmail
            setShowVerifyEmail(true);
        }
    };

    return (
        <div className="container-3">
            {!showVerifyEmail ? (
                <>
                    <p>INFORME SEU E-MAIL DE USUÁRIO</p>
                    <div className="input-container-3">
                        <div className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="divider"></div>
                        <input type="text" className="input" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='buttons'>
                        <button onClick={handleRecoverPass}>Recuperar Senha</button>
                    </div>
                </>
            ) : (
                <VerifyEmail />
            )}
        </div>
    );
}

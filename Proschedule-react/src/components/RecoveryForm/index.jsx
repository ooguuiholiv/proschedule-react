import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './indexRecovery.css';
import VerifyEmail from '../VerifyEmail';

export default function RecoveryForm() {
    const [showVerifyEmail, setShowVerifyEmail] = useState(true);

    const handleRecoverPass = () => {
        setShowVerifyEmail(false); // Altera o estado para mostrar o formulário de recuperação de senha
    };

    return (
        <div className="container-3">
            {showVerifyEmail ? (
                <>
                    <p>INFORME SEU E-MAIL DE USUÁRIO</p>
                    <div className="input-container-3">
                        <div className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="divider"></div>
                        <input type="text" className="input" placeholder="E-mail" />
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

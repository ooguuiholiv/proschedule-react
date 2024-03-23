
import React, { useState } from 'react';
import './indexEmail.css';
import CheckCodeEmail from '../CheckCodeEmail'; 

export default function VerifyEmail({ email, onResendEmail }) {
    const [showCheckCode, setShowCheckCode] = useState(false);

    const handleContinueClick = () => {
        setShowCheckCode(true); // Altera o estado para mostrar o componente CheckCodeEmail
    };

    const handleResendEmail = () => {
        // Envia o e-mail para o servidor novamente
        fetch('http://localhost:3000/auth/resend-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao reenviar e-mail');
            }
            // Se o envio for bem-sucedido, chama a função de callback onResendEmail
            onResendEmail(email);
        })
        .catch(error => {
            console.error('Erro:', error);
            // Lida com o erro, se necessário
        });
    };

    return (
        <div className="container-3">
            {showCheckCode ? (
                <CheckCodeEmail />
            ) : (
                <>
                    <p className='verify'>
                        Nós enviamos um e-mail para você contendo um código de recuperação.
                    </p>
                    <p className='verify'>
                        Verifique seu e-mail, anote o código e selecione continuar.
                    </p>
                    <p className='verify'>
                        Caso não tenha recebido o e-mail, verifique sua caixa de spam ou clique em reenviar o e-mail.
                    </p>
                    <div className='buttons'>
                        <button onClick={handleContinueClick}>Continuar</button>
                        <l className='resend' onClick={handleResendEmail}><u>Reenviar E-mail</u></l>
                    </div>
                </>
            )}
        </div>
    );
}

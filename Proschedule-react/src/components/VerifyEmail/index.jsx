import React, { useState } from 'react';
import './indexEmail.css';
import CheckCodeEmail from '../CheckCodeEmail'; // Importe o componente CheckCodeEmail

export default function VerifyEmail() {
    const [showCheckCode, setShowCheckCode] = useState(false); // Estado para controlar a renderização do componente

    const handleContinueClick = () => {
        setShowCheckCode(true); // Altera o estado para mostrar o componente CheckCodeEmail
    };

    return (
        <div className="container-3">
            {showCheckCode ? ( // Verifica se showCheckCode é true para renderizar CheckCodeEmail
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
                    </div>
                    <p><u>Reenviar o E-mail</u></p>
                </>
            )}
        </div>
    );
}

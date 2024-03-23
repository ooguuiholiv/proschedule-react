import React, { useState } from 'react';
import ResetPassword from '../ResetPassword';
import './indexCheck.css';

export default function CheckCodeEmail() {
    const [showResetPassword, setShowResetPassword] = useState(false); // Estado para controlar a renderização do componente

    const handleContinueClick = () => {
        setShowResetPassword(true); // Altera o estado para mostrar o componente CheckCodeEmail
    };

    return (
        <div className="container-5">
            {showResetPassword ? ( // Verifica se showCheckCode é true para renderizar CheckCodeEmail
                <ResetPassword />
            ) : (
                <>
            <p className='info'>
                Informe o código enviado em seu e-mail
            </p>
            <div className='input-container-5'>
                <input type="number" className="input" />
                <input type="number" className="input" />
                <input type="number" className="input" />
                <input type="number" className="input" />
                <input type="number" className="input" />
            </div>
            <div className='buttons'>
                <button  onClick={handleContinueClick}>Validar código de recuperação</button>
            </div>
            </>
            )}
        </div>
    );
}

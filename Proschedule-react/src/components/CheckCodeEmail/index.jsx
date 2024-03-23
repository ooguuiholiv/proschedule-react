import React, { useState } from 'react';
import ResetPassword from '../ResetPassword';
import './indexCheck.css';

export default function CheckCodeEmail() {
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [code, setCode] = useState(['', '', '', '', '']);

    const handleContinueClick = async () => {
        try {
            const concatenatedCode = code.join('');
            const response = await fetch('http://localhost:3000/auth/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: concatenatedCode }),
            });

            if (response.ok) {
                setShowResetPassword(true);
            } else {
                console.error('Código inválido');
                // Lida com a exibição da mensagem de código inválido
            }
        } catch (error) {
            console.error('Erro ao validar código:', error);
            // Lida com o erro, se necessário
        }
    };

    const handleInputChange = (index, value) => {
        // Verifica se o valor inserido é um número
        if (!isNaN(value) && value !== '') {
            const updatedCode = [...code];
            updatedCode[index] = value;
            setCode(updatedCode);
        }
    };

    return (
        <div className="container-5">
            {showResetPassword ? (
                <ResetPassword />
            ) : (
                <>
                    <p className='info'>
                        Informe o código enviado em seu e-mail
                    </p>
                    <div className='input-container-5'>
                        {code.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                className="input"
                                maxLength={1} // Garante que apenas um caractere possa ser inserido
                                value={value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                        ))}
                    </div>
                    <div className='buttons'>
                        <button onClick={handleContinueClick}>Validar código de recuperação</button>
                    </div>
                </>
            )}
        </div>
    );
}

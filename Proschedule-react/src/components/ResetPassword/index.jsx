import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './indexReset.css';

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSavePassword = async () => {
        try {
            // Verifica se as senhas são iguais
            if (newPassword !== confirmPassword) {
                throw new Error('As senhas não coincidem');
            }

            // Envia a nova senha para o servidor
            const response = await fetch('http://localhost:3000/auth/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword }),
            });

            if (response.ok) {
                // Lida com a resposta do servidor se a senha for alterada com sucesso
                console.log('Senha alterada com sucesso');
            } else {
                throw new Error('Erro ao alterar senha');
            }
        } catch (error) {
            console.error('Erro ao salvar nova senha:', error.message);
            // Lida com o erro, se necessário
        }
    };

    return (
        <div className="container-7">
            <div className="input-container-7">
                <div className="icon">
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="divider"></div>
                <input
                    type="password"
                    className="input"
                    placeholder="Nova senha"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div className="input-container-7">
                <div className="icon">
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="divider"></div>
                <input
                    type="password"
                    className="input"
                    placeholder="Repita a nova senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div className='buttons'>
                <button onClick={handleSavePassword}>Salvar nova senha</button>
            </div>
        </div>
    );
}

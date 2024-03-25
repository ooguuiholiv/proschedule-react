import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import pavel from '../../assets/pavel.jfif';
import Buttons from '../Buttons/index';
import LogoLogin from '../LogoLogin';
import './indexReset.css';

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false); // State para indicar o carregamento

    const onSavePasswordClick = async (password) => {
        try {
            // Aqui você faria a chamada para a API do servidor para salvar a nova senha
            const response = await fetch('https://api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password })
            });

            if (!response.ok) {
                throw new Error('Falha ao salvar a nova senha');
            }

            // Se a requisição for bem-sucedida, você pode fazer qualquer tratamento necessário aqui
            // Por exemplo, mostrar uma mensagem de sucesso para o usuário
            alert('Nova senha salva com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar nova senha:', error.message);
            // Lida com o erro, se necessário
            // Por exemplo, mostrar uma mensagem de erro para o usuário
            alert('Erro ao salvar nova senha. Por favor, tente novamente.');
        }
    };

    const handleSavePassword = async () => {
        try {
            setLoading(true); // Ativa o indicador de carregamento

            // Verifica se as senhas são iguais
            if (newPassword !== confirmPassword) {
                throw new Error('As senhas não coincidem');
            }

            // Envia a nova senha para o servidor
            await onSavePasswordClick(newPassword);

            // Limpa os campos de senha após o envio bem-sucedido
            setNewPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error('Erro ao salvar nova senha:', error.message);
            // Lida com o erro, se necessário
        } finally {
            setLoading(false); // Desativa o indicador de carregamento após a conclusão da operação
        }
    };

    return (
        <div className="container">
            <div className='container-1'>
                <img src={pavel} alt="Pavel" />
            </div>
            <div className="container-7">
                <div className='logo'>
                    <LogoLogin></LogoLogin>
                </div>
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
                    {/* Desativa o botão se estiver carregando */}
                    <Buttons 
                        buttonText={loading ? "Aguarde..." : "Salvar nova senha"}
                        onClick={handleSavePassword}
                        disabled={loading} // Desabilita o botão durante o carregamento
                    />
                </div>
            </div>
        </div>
    );
}

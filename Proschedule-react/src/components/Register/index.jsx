import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './indexRegister.css';

export default function Register() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterClick = async () => {
        const userData = {
            fullname,
            email,
            password
        };

        try {
            // Requisição POST para o endpoint do servidor
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('Usuário cadastrado com sucesso!');
                // Limpa os campos de input após o registro bem-sucedido
                setFullname('');
                setEmail('');
                setPassword('');
            } else {
                console.error('Erro ao cadastrar usuário:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    };

    return (
        <div className="container-3">
            <p>CADASTRE-SE AGORA MESMO</p>
            <div className="input-container-3">
                <div className="icon">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="divider"></div>
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Nome Completo" 
                    value={fullname} 
                    onChange={(e) => setFullname(e.target.value)} 
                />
            </div>
            <div className="input-container-3">
                <div className="icon">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="divider"></div>
                <input 
                    type="text" 
                    className="input" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="input-container-3">
                <div className="icon">
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="divider"></div>
                <input 
                    type="password" 
                    className="input" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <a href="#"><u>Ao clicar em register você concorda com os termos de usuário</u></a>
            <div className='buttons'>
                <button onClick={handleRegisterClick}>Register</button>
                <button>Login</button>
            </div>
        </div>
    );
}

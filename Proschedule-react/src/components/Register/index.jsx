import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../Buttons/index';
import LogoLogin from '../LogoLogin';
import styled from 'styled-components';

const ContainerRegisterForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;
    gap: 10px;
    position: relative;
`;

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E5E7EB;
    border-radius: 10px 0px 0px 10px;
    background-color: #ffffff;
`;

const Input = styled.input`
    flex: 1;
    height: 38px;
    margin-left: -0.75rem;
    border: none;
    border-radius: 0px 10px 10px 0px;
    color: #E5E7EB;
    background-color: #ffffff;
    font-family: Public Sans;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    &::placeholder {
        color: #E5E7EB;
    }
`;

const Message = styled.p`
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 14.1px;
    text-align: left;
    color: #566A7F;
`;

const Link = styled.a`
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 14.1px;
    text-align: left;
    color: #566A7F;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export default function Register({ onRegisterClick, onBackToLoginClick }) {
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

        // Chame a função recebida como prop
        onRegisterClick();
    };

    return (
        <ContainerRegisterForm>
            <LogoLogin/>
            <Message>CADASTRE-SE AGORA MESMO</Message>
            <InputContainer>
                <IconContainer>
                    <FontAwesomeIcon icon={faUser} />
                </IconContainer>
                <div className="divider"></div>
                <Input 
                    type="text" 
                    placeholder="Nome Completo" 
                    value={fullname} 
                    onChange={(e) => setFullname(e.target.value)} 
                />
            </InputContainer>
            <InputContainer>
                <IconContainer>
                    <FontAwesomeIcon icon={faUser} />
                </IconContainer>
                <div className="divider"></div>
                <Input 
                    type="text" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </InputContainer>
            <InputContainer>
                <IconContainer>
                    <FontAwesomeIcon icon={faLock} />
                </IconContainer>
                <div className="divider"></div>
                <Input 
                    type="password" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </InputContainer>
            <Link href="#"><u>Ao clicar em register você concorda com os termos de usuário</u></Link>
            <ButtonContainer>
                <Buttons 
                    buttonText="Register" 
                    onClick={handleRegisterClick} 
                />
                <Buttons
                    buttonText="Voltar para login"
                    onClick={onBackToLoginClick}
                />
            </ButtonContainer>
        </ContainerRegisterForm>
    );
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../Buttons/index';
import LogoLogin from '../LogoLogin';
import styled from 'styled-components';

const ContainerLoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 400px;
    padding: 2rem;
    width: 90%; /* Ajuste para 90% da largura */
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
`;

const InputContainerLoginForm = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;
    gap: 1rem; /* Ajuste para 1rem */
`;

const Icon = styled.div`
    width: 15%; /* Ajuste para 15% */
    max-width: 40px; /* Ajuste para 40px */
    height: 38px;
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
    border: none;
    margin-left: -0.75rem;
    border-radius: 0px 10px 10px 0px;
    color: #E5E7EB;
    background-color: #ffffff;
    font-family: Public Sans;
    font-size: 1rem; /* Ajuste para 1rem */
    font-weight: 400;
    line-height: 1.5rem; /* Ajuste para 1.5rem */
    text-align: left;

    &::placeholder {
        color: #E5E7EB;
    }
`;

const Paragraph = styled.p`
    font-family: inter;
    font-size: 1rem; /* Ajuste para 1rem */
    font-weight: 500;
    line-height: 1rem; /* Ajuste para 1rem */,
    text-align: left;
    color: #566A7F;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

const OverPass = styled.div`
    font-family: inter;
    font-size: 1rem; /* Ajuste para 1rem */
    font-weight: 400;
    line-height: 1.5rem; /* Ajuste para 1.5rem */
    text-align: left;
    color: #566A7F;
    cursor: pointer;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export default function LoginForm({ onForgotPasswordClick, onRegisterClick }) { 
    const handleButtonClick = () => {
        console.log('Botão clicado');
    };

    return (
        <ContainerLoginForm>
            <LogoLogin/>
            <Paragraph>INFORME SUAS CREDENCIAIS DE ACESSO</Paragraph>
            <InputContainerLoginForm>
                <Icon>
                    <FontAwesomeIcon icon={faUser} />
                </Icon>
                <Input type="text" placeholder="Usuário/ E-mail" />
            </InputContainerLoginForm>
            <InputContainerLoginForm>
                <Icon>
                    <FontAwesomeIcon icon={faLock} />
                </Icon>
                <Input type="password" placeholder="Senha" />
            </InputContainerLoginForm>
            <OverPass onClick={onForgotPasswordClick}><u>Esqueci minha senha</u></OverPass>
            <ButtonContainer>
                <Buttons 
                    buttonText="Login" 
                    onClick={handleButtonClick} 
                />
                <Buttons 
                    buttonText="Register" 
                    onClick={onRegisterClick} 
                />
            </ButtonContainer>
        </ContainerLoginForm>
    );
}

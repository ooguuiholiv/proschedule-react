import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../Buttons/index';
import LogoLogin from '../LogoLogin';
import styled from 'styled-components';

const ContainerRecoveryForm = styled.div`
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
    gap: 0.5rem;
    position: relative;
`;

const IconContainer = styled.div`
    width: 40px;
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

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export default function RecoveryForm({ onBackToLoginClick, onRecoverySuccess }) {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleRecoverPass = () => {
        // Envia o email para o servidor
        fetch('URL_DO_SERVIDOR', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => {
            if (response.ok) {
                console.log('Email enviado com sucesso');
                // Chama a função onRecoverySuccess após o sucesso da recuperação
                onRecoverySuccess();
            } else {
                console.error('Falha ao enviar email');
                // Trata a falha de envio
                onRecoverySuccess(); // Chama a função mesmo em caso de falha
            }
        })
        .catch(error => {
            console.error('Erro ao enviar email:', error);
            // Trata o erro de envio
            onRecoverySuccess(); // Chama a função mesmo em caso de erro
        });
    };

    return (
        <ContainerRecoveryForm>
            <LogoLogin />
            <>
                <Message>INFORME SEU E-MAIL DE USUÁRIO</Message>
                <InputContainer>
                    <IconContainer>
                        <FontAwesomeIcon icon={faUser} />
                    </IconContainer>
                    <div className="divider"></div>
                    <Input 
                        type="text" 
                        placeholder="E-mail" 
                        value={email} 
                        onChange={handleEmailChange} 
                    />
                </InputContainer>
                <ButtonContainer>
                    <Buttons
                        buttonText="Recuperar Senha"
                        onClick={handleRecoverPass}
                    />
                    <Buttons
                        buttonText="Voltar para login"
                        onClick={onBackToLoginClick}
                    />
                </ButtonContainer>
            </>
        </ContainerRecoveryForm>
    );
}

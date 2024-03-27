import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import pavel from '../../assets/pavel.jfif';
import Buttons from '../Buttons/index';
import LogoLogin from '../LogoLogin';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 20px;
    opacity: 0px;
    background: #E5E7EB;
    padding: 0.1rem;
    width: 50rem; /* Alterado para uma unidade de medida mais apropriada */
    height: 70vh;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: 100vh;
        padding: 0;
    }
`;

const Container1 = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 20px 0px 0px 20px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Image = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Container7 = styled.div`
    width: 50%;
    height: auto;
    gap: 0px;
    opacity: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%; 
    gap: 0px;
    padding-bottom: 10px;
    position: relative;
`;

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    gap: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E5E7EB;
    border-radius: 10px 0px 0px 10px;
    background-color: #ffffff;
`;

const Input = styled.input`
    flex: 1;
    height: 100%;
    padding-left: 38px;
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

const Divider = styled.div`
    width: 5px;
    height: 38px;
    left: 37px;
    gap: 0px;
    border: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 1rem; 
`;

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onSavePasswordClick = async (password) => {
        try {
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

            alert('Nova senha salva com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar nova senha:', error.message);
            alert('Erro ao salvar nova senha. Por favor, tente novamente.');
        }
    };

    const handleSavePassword = async () => {
        try {
            setLoading(true);

            if (newPassword !== confirmPassword) {
                throw new Error('As senhas não coincidem');
            }

            await onSavePasswordClick(newPassword);

            setNewPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error('Erro ao salvar nova senha:', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Container1>
                <Image src={pavel} alt="Pavel" />
            </Container1>
            <Container7>
                <LogoContainer>
                    <LogoLogin />
                </LogoContainer>
                <InputContainer>
                    <IconContainer>
                        <FontAwesomeIcon icon={faLock} />
                    </IconContainer>
                    <Divider />
                    <Input
                        type="password"
                        placeholder="Nova senha"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <IconContainer>
                        <FontAwesomeIcon icon={faLock} />
                    </IconContainer>
                    <Divider />
                    <Input
                        type="password"
                        placeholder="Repita a nova senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </InputContainer>
                <ButtonContainer>
                    <Buttons 
                        buttonText={loading ? "Aguarde..." : "Salvar nova senha"}
                        onClick={handleSavePassword}
                        disabled={loading}
                    />
                </ButtonContainer>
            </Container7>
        </Container>
    );
}

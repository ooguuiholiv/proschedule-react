import React from 'react';
import LogoLogin from '../LogoLogin';
import styled from 'styled-components';

const ContainerVerifyForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 10px;
    position: relative;
    align-items: center;
`;

const VerifyMessage = styled.p`
    margin-bottom: 0.5rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; 
    padding: 0; 
    border-radius: 10px; 
    opacity: 0px; 
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 14.1px;
    text-align: center;
`;

const StyledParagraph = styled.p`
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 14.1px;
    text-align: left;
    color: #566A7F;
`;

const StyledUnderline = styled.u`
    cursor: pointer;
`;

export default function VerifyEmail({ onResendEmailClick }) {
    return (
        <ContainerVerifyForm>
            <LogoLogin/>
            <InnerContainer>
                <VerifyMessage>
                    Nós enviamos um e-mail para você contendo um link de recuperação.
                </VerifyMessage>
                <VerifyMessage>
                    Verifique seu e-mail e clique no link para continuar.
                </VerifyMessage>
                <VerifyMessage>
                    Caso não tenha recebido o e-mail, verifique sua caixa de spam ou clique em reenviar o e-mail.
                </VerifyMessage>
                <StyledParagraph onClick={onResendEmailClick}>
                    <StyledUnderline>Reenviar o E-mail</StyledUnderline>
                </StyledParagraph>
            </InnerContainer>
        </ContainerVerifyForm>
    );
}

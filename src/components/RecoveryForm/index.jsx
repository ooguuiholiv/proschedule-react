import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../Buttons/index';
import LogoLogin from '../LogoLogin';
import styled, { createGlobalStyle } from "styled-components";
import pavel from "../../assets/pavel.jfif";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    color: #f2f2f2;
    line-height: 1.5;
  }
`;

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
    color: #363636;
    padding: 10px;
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 20px;
  opacity: 0px;
  background: #e5e7eb;
  padding: 0.1rem;
  width: 58.56vw; /* Alterado para uma unidade de medida mais apropriada */
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

const Container2 = styled.div`
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
export default function RecoveryForm() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleRecoverPass = async () => {
        // Envia o email para o servidor
        await fetch("http://localhost:7777/auth/forgot-password", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Email enviado com sucesso");
              // Chama a função onRecoverySuccess após o sucesso da recuperação
            } else {
              console.error("Falha ao enviar email");
              // Trata a falha de envio
            }
          })
          .catch((error) => {
            console.error("Erro ao enviar email:", error);
            // Trata o erro de envio
          });
    };

    return (
      <>
        <GlobalStyle />
        <Container>
          <Container1 className="d-none d-md-block">
            <Image src={pavel} alt="Pavel" />
          </Container1>
          <Container2>
            <ContainerRecoveryForm>
              <LogoLogin />
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
                  
                </ButtonContainer>
            </ContainerRecoveryForm>
          </Container2>
        </Container>
      </>
    );
}

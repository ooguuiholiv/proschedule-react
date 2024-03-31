import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import styled, { createGlobalStyle } from "styled-components";
import pavel from "../../assets/pavel.jfif";
import Buttons from "../Buttons/index";
import LogoLogin from "../LogoLogin/index";

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

const Container7 = styled.form`
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
  color: #e5e7eb;
  border-radius: 10px 0px 0px 10px;
  background-color: #ffffff;
`;

const Input = styled.input`
  flex: 1;
  height: 38px;
  margin-left: 0.1rem;
  border: none;
  border-radius: 0px 10px 10px 0px;
  color: #363636;
  background-color: #ffffff;
  font-family: Public Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  &::placeholder {
    color: #e5e7eb;
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
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSavePasswordClick = async (password) => {
    try {
      const response = await fetch("https://api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error("Falha ao salvar a nova senha");
      }

      alert("Nova senha salva com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar nova senha:", error.message);
      alert("Erro ao salvar nova senha. Por favor, tente novamente.");
    }
  };

  const handleSavePassword = async () => {
    try {
      setLoading(true);

      if (newPassword !== confirmPassword) {
        throw new Error("As senhas não coincidem");
      }

      await onSavePasswordClick(newPassword);

      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Erro ao salvar nova senha:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Container1>
          <Image src={pavel} alt="Pavel" />
        </Container1>
        <Container7 onSubmit={handleSavePassword}>
          <LogoLogin />
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
              id="newPassword"
              name="newPassword"
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
              id="confirmPassword"
              name="confirmPassword"
            />
          </InputContainer>
          <ButtonContainer>
            <Buttons
              buttonText={loading ? "Aguarde..." : "Salvar nova senha"}
              disabled={loading}
              type="submit"
            />
          </ButtonContainer>
        </Container7>
      </Container>
    </>
  );
    }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../Buttons/index";
import LogoLogin from "../LogoLogin";
import styled, { createGlobalStyle } from "styled-components";
import pavel from "../../assets/pavel.jfif";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import Cookies from "js-cookie";

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
  color: #e5e7eb;
  border-radius: 10px 0px 0px 10px;
  background-color: #ffffff;
`;

const Input = styled.input`
  flex: 1;
  height: 38px;
  border: none;
  margin-left: -0.75rem;
  border-radius: 0px 10px 10px 0px;
  color: #363636;
  padding: 10px;
  background-color: #ffffff;
  font-family: Public Sans;
  font-size: 1rem; /* Ajuste para 1rem */
  font-weight: 400;
  line-height: 1.5rem; /* Ajuste para 1.5rem */
  text-align: left;

  &::placeholder {
    color: #e5e7eb;
  }
`;

const Paragraph = styled.p`
  font-family: inter;
  font-size: 1rem; /* Ajuste para 1rem */
  font-weight: 500;
  line-height: 1rem; /* Ajuste para 1rem */
  text-align: center;
  color: #566a7f;

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
  color: #566a7f;
  cursor: pointer;
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

export default function LoginForm() {
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   await  fetch("http://localhost:7777/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ocorreu um erro ao enviar o formulário.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Resposta do servidor:", data);
        // Faça algo com a resposta do servidor, se necessário
        const authToken = data.bearerToken;
        window.localStorage.setItem("token", authToken);
        Cookies.set("token", authToken, { expires: 7 });
        window.location.href = '/dashboard'
      })
      .catch((error) => {
        console.error("Erro:", error);
        // Trate o erro de acordo com sua lógica de aplicação
      });
  };
  
const redirecionar = () => {
  window.location.href = '/auth/register'
}

const red_recovery = () => {
  window.location.href = '/auth/recovery'
}
  

  return (
    <>
      <GlobalStyle />
      <Container>
        <Container1 className="d-none d-md-block">
          <Image src={pavel} alt="Pavel" />
        </Container1>
        <Container2>
          <ContainerLoginForm>
            <LogoLogin />
            <Paragraph>INFORME SUAS CREDENCIAIS DE ACESSO</Paragraph>
            <InputContainerLoginForm>
              <Icon>
                <FontAwesomeIcon icon={faUser} />
              </Icon>
              <Input type="text" placeholder="Usuário/ E-mail" id="email" name="email" onChange={handleChange} value={formData.email}/>
            </InputContainerLoginForm>
            <InputContainerLoginForm>
              <Icon>
                <FontAwesomeIcon icon={faLock} />
              </Icon>
              <Input type="password" placeholder="Senha" id="password" name="password" value={formData.password} onChange={handleChange} />
            </InputContainerLoginForm>
            <OverPass onClick={red_recovery}>
              <u>Esqueci minha senha</u>
            </OverPass>
            <ButtonContainer>
              <Buttons buttonText="Login" onClick={handleSubmit} />
              <Buttons buttonText="Register" onClick={redirecionar} />
            </ButtonContainer>
          </ContainerLoginForm>
        </Container2>
      </Container>
    </>
  );
}

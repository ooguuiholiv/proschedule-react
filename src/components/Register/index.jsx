import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../Buttons/index";
import LogoLogin from "../LogoLogin";
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
  color: #e5e7eb;
  border-radius: 10px 0px 0px 10px;
  background-color: #ffffff;
`;

const Input = styled.input`
  flex: 1;
  height: 38px;
  margin-left: -0.75rem;
  border: none;
  border-radius: 0px 10px 10px 0px;
  color: rgba(54, 54, 54, 0.7);
  background-color: #ffffff;
  font-family: Public Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  padding: 2px;

  &::placeholder {
    color: rgba(54, 54, 54, 0.7);
  }
`;

const Message = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 14.1px;
  text-align: left;
  color: #566a7f;
`;

const Link = styled.a`
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 14.1px;
  text-align: left;
  color: #566a7f;
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
export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegisterClick = async () => {
    const userData = {
      fullname,
      email,
      password,
      phone,
    };
    console.log(fullname);
    try {
      // Requisição POST para o endpoint do servidor
      const response = await fetch(
        "http://databases-proschedule-backend.dkujoa.easypanel.host:8080/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        console.log("Usuário cadastrado com sucesso!");

        // Limpa os campos de input após o registro bem-sucedido
        setFullname("");
        setEmail("");
        setPassword("");
        window.location.href = '/auth/login'
      } else {
        console.error("Erro ao cadastrar usuário:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }

    // Chame a função recebida como prop
    
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Container1 className="d-none d-md-block">
          <Image src={pavel} alt="Pavel" />
        </Container1>
        <Container2>
          <ContainerRegisterForm>
            <LogoLogin />
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
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
            <Link href="#">
              <u>
                Ao clicar em register você concorda com os termos de usuário
              </u>
            </Link>
            <ButtonContainer>
              <Buttons buttonText="Register" onClick={handleRegisterClick} />
            </ButtonContainer>
          </ContainerRegisterForm>
        </Container2>
      </Container>
    </>
  );
}

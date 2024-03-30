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
    color: #1e1e1e;
`;

const StyledParagraph = styled.p`
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 14.1px;
    text-align: center;
    color: #566A7F;
`;

const StyledUnderline = styled.u`
    cursor: pointer;
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

export default function VerifyEmail({ onResendEmailClick }) {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Container1 className="d-none d-md-block">
            <Image src={pavel} alt="Pavel" />
          </Container1>
          <Container2>
            <ContainerVerifyForm>
              <LogoLogin />
              <InnerContainer>
                <VerifyMessage>
                  Nós enviamos um e-mail para você contendo um link de
                  recuperação.
                </VerifyMessage>
                <VerifyMessage>
                  Verifique seu e-mail e clique no link para continuar.
                </VerifyMessage>
                <VerifyMessage>
                  Caso não tenha recebido o e-mail, verifique sua caixa de spam
                  ou clique em reenviar o e-mail.
                </VerifyMessage>
                <StyledParagraph onClick={onResendEmailClick}>
                  <StyledUnderline>Reenviar o E-mail</StyledUnderline>
                </StyledParagraph>
              </InnerContainer>
            </ContainerVerifyForm>
          </Container2>
        </Container>
      </>
    );
}

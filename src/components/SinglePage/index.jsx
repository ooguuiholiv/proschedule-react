import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faBell, faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import schedule from '../../assets/schedule.png';

// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter;
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    color: #f2f2f2;
    line-height: 1.5;
  }
`;

// Componente principal
const SinglePage = () => {
  const handleScrollToCards = () => {
    const featuresElement = document.getElementById('features');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <GlobalStyle />
      <Container>
        <Content>
          <Header>
            <Title>Proschedule</Title>
            <Description>
              O Proschedule é a sua solução completa para simplificar o processo de agendamento de compromissos e reuniões.
            </Description>
            <Link to="/login">
              <Button>Entrar Agora</Button>
            </Link>
            <MoreFeatures>Mais funcionalidades abaixo</MoreFeatures>
            <ScrollArrow icon={faChevronDown} onClick={handleScrollToCards} />
          </Header>
        </Content>
        <ImageContainer style={{ backgroundImage: `url(${schedule})` }}>
          <Icon icon={faCalendarAlt} />
        </ImageContainer>
      </Container>
      <Features id="features">
        <FeatureCard>
          <IconWrapper>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </IconWrapper>
          <FeatureTitle>Agendamento Personalizado</FeatureTitle>
          <FeatureDescription>
            Configure facilmente seus horários de disponibilidade de acordo com suas preferências e compromissos existentes.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <IconWrapper>
            <FontAwesomeIcon icon={faBell} />
          </IconWrapper>
          <FeatureTitle>Lembretes Automáticos</FeatureTitle>
          <FeatureDescription>
            Mantenha-se organizado com lembretes automáticos por e-mail para todos os participantes do compromisso.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <IconWrapper>
            <FontAwesomeIcon icon={faClock} />
          </IconWrapper>
          <FeatureTitle>Personalização Total</FeatureTitle>
          <FeatureDescription>
            Ajuste as configurações do Proschedule de acordo com suas necessidades específicas, incluindo a duração padrão de reuniões, intervalos entre compromissos e muito mais.
          </FeatureDescription>
        </FeatureCard>
      </Features>
      <WhyChoose>
        <WhyChooseContent>
          <WhyChooseTitle>Por que escolher o Proschedule? <CheckIcon icon={faCheck} /></WhyChooseTitle>
          <WhyChooseDescription>
            O Proschedule é a escolha ideal para profissionais e equipes que buscam uma maneira eficaz e conveniente de organizar suas agendas.
          </WhyChooseDescription>
          <WhyChooseDescription>
            Comece a usar o Proschedule hoje mesmo e descubra como você pode otimizar sua rotina diária!
          </WhyChooseDescription>
        </WhyChooseContent>
      </WhyChoose>
    </div>
  );
};


// Estilos dos componentes
const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #222; 
`;

const Content = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: left;
  padding: 2rem;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Header = styled.div`
  position: relative; 
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #363636;
  color: #f2f2f2;
  border: none;
  margin-bottom: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  height: 100vh;
  opacity: 0.7;
  width: 50%; /* Ajuste para 50% ou outro valor adequado */
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 500px 0 0 500px;
  border: 2px solid #222;
  z-index: 1;
  position: relative;
  background: linear-gradient(90deg, #000000, rgba(255, 255, 255, 0.5098039216));
  inset: 0;
  
  @media (max-width: 800px) {
    display: none; 
  }
`;

// Ícones
const Icon = styled(FontAwesomeIcon)`
  font-size: 6rem; 
  color: #f2f2f2; 
`;

// Recursos principais
const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 3rem;
  gap: 1rem;
`;

const FeatureCard = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  padding: 1.5rem;
  background-color: #222;
  margin: 0.5rem;
`;

const FeatureTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #363636;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhyChoose = styled.div`
  margin-top: 3rem;
  text-align: center; 
`;

const WhyChooseContent = styled.div`
  background-color: #222; 
  padding: 2rem;
  border-radius: 10px;
`;

const WhyChooseTitle = styled.h2`
  font-size: 2rem;
`;

const WhyChooseDescription = styled.p`
  font-size: 1.2rem;
`;

const CheckIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: green;
`;

const MoreFeatures= styled.div`
  position: absolute;
  bottom: -4.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  color: white;
`;

// Adicione a animação de quicar ao ScrollArrow
const ScrollArrow = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: -7.5rem;
  left: 47%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: white;
  cursor: pointer;
  animation: bounce 1s infinite alternate; /* Animação de quicar */

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-1rem); /* Altura do quique */
    }
  }

  @media (min-width: 1024px) {
    left: 50%;
  }
  @media (max-width: 432px) {
    left: 45%;
  }
`;

export default SinglePage;


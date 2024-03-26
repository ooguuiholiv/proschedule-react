import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 20px;
    opacity: 0px;
    background: #E5E7EB;
    padding: 2rem;
    width: 50rem; /* Alterado para uma unidade de medida mais apropriada */
    height: 70vh;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: 100vh;
        padding: 0;
    }
`;

export const Container1 = styled.div`
    width: 50%;
    margin: 0;
    border-radius: 20px 0px 0px 20px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    display: block;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Container2 = styled.div`
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

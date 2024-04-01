import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Public Sans;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.63px;
    letter-spacing: 0.4285714328289032px;
    color: #FFFFFF;
`;

const ButtonElement = styled.button`
    display: flex;
    width: 100%;
    max-width: 293px;
    height: 45px;
    margin-top: 0.5rem;
    padding: 1.25rem;
    gap: 0px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: rgb(36, 73, 192);

    @media screen and (max-width: 400px) {
        width: calc(100% - 1rem);
        max-width: none;
        padding: 1rem;
    }

    @media screen and (max-width: 350px) {
        font-size: 14px;
    }

    @media screen and (max-width: 300px) {
        font-size: 13px;
    }
`;

export default function Buttons({ buttonText, onClick }) {
    return (
        <ButtonWrapper>
            <ButtonElement onClick={onClick}>{buttonText}</ButtonElement>
        </ButtonWrapper>
    );
}

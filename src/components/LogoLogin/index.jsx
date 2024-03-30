import React from "react";
import styled from 'styled-components';
import LogoImage from '../../assets/logo.png';

const LogoContainer = styled.div`
    width: 100%;
    max-width: 293px;
    height: 73px;
    border-radius: 10px 0px 0px 0px;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 400px) {
        max-width: calc(100% - 1rem);
    }
`;

const LogoImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

export default function LogoLogin() {
    return (
        <LogoContainer>
            <LogoImg src={LogoImage} alt="Logo" />
        </LogoContainer>
    );
}

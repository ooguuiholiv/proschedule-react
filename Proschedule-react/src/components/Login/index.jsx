import React, { useState } from 'react';
import pavel from '../../assets/pavel.jfif';
import LoginForm from '../LoginForm';
import RecoveryForm from '../RecoveryForm';
import VerifyEmail from '../VerifyEmail';
import Register from '../Register';
import { Container, Container1, Image, Container2 } from './styles';

export default function LoginPage() {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showRecoveryForm, setShowRecoveryForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false); 
    const [showVerifyEmail, setShowVerifyEmail] = useState(false);

    const handleRegisterClick = () => {
        setShowLoginForm(false);
        setShowRecoveryForm(false);
        setShowRegisterForm(true);
    };

    const handleForgotPasswordClick = () => {
        setShowLoginForm(false);
        setShowRecoveryForm(true);
        setShowRegisterForm(false); 
    };

    const handleBackToLoginClick = () => {
        setShowLoginForm(true);
        setShowRecoveryForm(false);
        setShowRegisterForm(false); 
    };

    const handleRecoverySuccess = () => {
        setShowRecoveryForm(false);
        setShowVerifyEmail(true);
    };

    const handlerVerifySuccess = () => {
        setShowRecoveryForm(true);
        setShowVerifyEmail(false);
    };

    return (
        <Container>
            <Container1 className='d-none d-md-block'>
                <Image src={pavel} alt="Pavel" />
            </Container1>
            <Container2>
                {showLoginForm ? (
                    <LoginForm onForgotPasswordClick={handleForgotPasswordClick} onRegisterClick={handleRegisterClick} />
                ) : showRecoveryForm ? (
                    <RecoveryForm onBackToLoginClick={handleBackToLoginClick} onRecoverySuccess={handleRecoverySuccess} />
                ) : showRegisterForm ? (
                    <Register onBackToLoginClick={handleBackToLoginClick} />
                ) : showVerifyEmail ? (
                    <VerifyEmail onResendEmailClick={handlerVerifySuccess} />
                ) : null}
            </Container2>
        </Container>
    );
}

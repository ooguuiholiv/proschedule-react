import React from 'react';
import LogoLogin from '../LogoLogin';
import './indexEmail.css'

export default function VerifyEmail({ onResendEmailClick }) {
    return (
        <div className="container-verify-form">
            <LogoLogin/>
            <>
                <p className='verify'>
                    Nós enviamos um e-mail para você contendo um link de recuperação.
                </p>
                <p className='verify'>
                    Verifique seu e-mail e clique no link para continuar.
                </p>
                <p className='verify'>
                    Caso não tenha recebido o e-mail, verifique sua caixa de spam ou clique em reenviar o e-mail.
                </p>
                <p onClick={onResendEmailClick}><u>Reenviar o E-mail</u></p>
            </>
        </div>
    );
}

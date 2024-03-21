import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './indexLogin.css';

export default function LoginForm() {

    return (
        <div className="container-3">
            <p>INFORME SUAS CREDENCIAIS DE ACESSO</p>
            <div className="input-container-3">
                <div className="icon">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="divider"></div>
                <input type="text" className="input" placeholder="Usuário/ E-mail" />
            </div>
            <div className="input-container-3">
                <div className="icon">
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="divider"></div>
                <input type="password" className="input" placeholder="Senha" />
            </div>
            
        </div>
    );
}


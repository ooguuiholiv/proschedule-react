import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './indexReset.css';

export default function ResetPassword() {

    return (
        <div className="container-7">
            <div className="input-container-7">
                <div className="icon">
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="divider"></div>
                <input type="password" className="input" placeholder="Nova senha" />
            </div>
            <div className="input-container-7">
                <div className="icon">
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="divider"></div>
                <input type="password" className="input" placeholder="Repita a nova senha" />
            </div>
            <div className='buttons'>
                <button>Salvar nova senha</button>
            </div>
        </div>
    );
}
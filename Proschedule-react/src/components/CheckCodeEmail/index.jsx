import './indexCheck.css';

export default function CheckCodeEmail() {
    return (
        <div className="container-5">
            <p className='info'>
                Informe o código enviado em seu e-mail
            </p>
            <div className='input-container-5'>
                <input type="number" className="input" />
                <input type="number" className="input" />
                <input type="number" className="input" />
                <input type="number" className="input" />
                <input type="number" className="input" />
            </div>
            <div className='buttons'>
                <button>Validar código de recuperação</button>
            </div>
        </div>
    );
}

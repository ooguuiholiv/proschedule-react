import React from 'react';
import './indexButtons.css';

export default function Buttons({ buttonText, onClick }) {
    return (
        <div className='buttons'>
            <button onClick={onClick}>{buttonText}</button>
        </div>
    );
}

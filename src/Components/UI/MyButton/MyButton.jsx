import React from 'react';
import '@styles/myButton.css'

const MyButton = ({title, onClick, type}) => {
    return (
        <button type={type} onClick={onClick} className={'mybutton'}>
            {title}
        </button>
    );
};

export default MyButton;
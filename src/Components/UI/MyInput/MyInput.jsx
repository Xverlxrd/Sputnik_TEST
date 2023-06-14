import React from 'react';
import '@styles/myInput.css'

const MyInput = ({title, type, placeholder}) => {
    return (
        <div className={'input__container'}>
            <span className={'input__title'}>{title}</span>
            <input type={type} placeholder={placeholder} className={'myinput'}/>
        </div>
    );
};

export default MyInput;
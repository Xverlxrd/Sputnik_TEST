import React from 'react';
import '@styles/myButton.css'

const MyButton = ({title}) => {
    return (
        <button className={'mybutton'}>
            {title}
        </button>
    );
};

export default MyButton;
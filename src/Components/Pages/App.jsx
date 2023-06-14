import React from 'react';
import MyButton from "@src/Components/UI/MyButton/MyButton";
import '@styles/app.css';
import Modal from "@src/Components/UI/Modal/Modal";

const App = () => {

    return (
        <div className={'page__container'}>
            {/*<MyButton title={'авторизоваться'}/>*/}
            <Modal/>
        </div>
    );
};

export default App;
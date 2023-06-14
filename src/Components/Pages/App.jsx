import React from 'react';
import MyButton from "@src/Components/UI/MyButton/MyButton";
import '@styles/app.css';
import Modal from "@src/Components/UI/Modal/Modal";

const App = () => {
    const [ isModal, setIsModal ] = React.useState(false)

    const showModalByPress = (e) => {
        e.stopPropagation()
        setIsModal(true)
    }
    return (
        <div
            onClick={e => setIsModal(false)}
            className={'page__container'}
        >
            <MyButton
                onClick={showModalByPress}
                title={'авторизоваться'}
            />

            <Modal
                setIsModal={setIsModal}
                isModal={isModal}
            />
        </div>
    );
};

export default App;
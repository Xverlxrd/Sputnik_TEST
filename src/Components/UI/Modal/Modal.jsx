import React from 'react';
import '@styles/modal.css'
import MyInput from "@src/Components/UI/MyInput/MyInput";
import MyButton from "@src/Components/UI/MyButton/MyButton";
import { Icon } from '@iconify/react';

const Modal = ({isModal, setIsModal}) => {
    return (
        <div
            onClick={e => e.stopPropagation()}
            className={`modal__container ${isModal ? 'modal__container--visible' : ''}`}
        >

            <div className="modal__start">
                <div className={'modal__text'}>
                    <h1 className={'modal__text_title'}>Web</h1>
                    <p className={'modal__text_other'}>App</p>
                </div>
                <Icon
                    onClick={e => setIsModal(false)}
                    className={'modal__exit'}
                    icon="ph:x-bold"
                    color="blue"
                />
            </div>

            <h3 className={'modal__welcome'}>Войдите в свой профиль</h3>

            <div className="modal__inputs">
                <MyInput
                    title={'Логин'}
                    type={'email'}
                />

                <MyInput
                    title={'Пароль'}
                    type={'password'}
                />
            </div>

            <MyButton
                type={'submit'}
                title={'войти'}
            />

            <ul className="modal__links">
                <li className="modal__links_item">Я забыл пароль</li>
                <li className="modal__links_item">Регистрация</li>
            </ul>

            <div className="modal__support">
                <Icon className={'modal__support_img'} icon="pepicons-pencil:letter" />
                <p className="modal__support_text">Написать в поддержку</p>
            </div>

        </div>
    );
};

export default Modal;
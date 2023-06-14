import React from 'react';
import '@styles/modal.css'
import MyInput from "@src/Components/UI/MyInput/MyInput";
import MyButton from "@src/Components/UI/MyButton/MyButton";
import { Icon } from '@iconify/react';

const Modal = ({
                   isModal,
                   setIsRegModal,
                   setIsModal,
                   isRegModal,
                   setIsPassModal,
                   isPassModal
}) => {

    const closeLinksModal = () => {
        if(isRegModal){
            setIsRegModal(false)
        }
        else{
            setIsPassModal(false)
        }
    }

    return (

        <>
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
                        onClick={e => !isPassModal && !isRegModal && setIsModal(false)}
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
                    <li
                        onClick={event => isRegModal ? setIsPassModal(false) : setIsPassModal(true)}
                        className="modal__links_item">Я забыл пароль
                    </li>
                    <li
                        onClick={e => isPassModal ? setIsRegModal(false) : setIsRegModal(true)}
                        className="modal__links_item">Регистрация
                    </li>
                </ul>

                <div className="modal__support">
                    <Icon className={'modal__support_img'} icon="pepicons-pencil:letter"/>
                    <p className="modal__support_text">Написать в поддержку</p>
                </div>

            </div>

            <div
                onClick={e => e.stopPropagation()}
                className={`reg__modal ${isRegModal ? 'reg__modal--visible' : ''}`}
            >
                <Icon
                    onClick={e => closeLinksModal()}
                    className={'links__modal_exit'}
                    icon="ph:x-bold"
                    color="red"
                />
                <MyInput title={'Логин'} placeholder={'...@mail.ru'} type={'email'}/>
                <MyInput title={'Пароль'}  type={'password'}/>
                <MyInput title={'Номер телефона'} placeholder={'+7..........'} type={'phone'}/>
            </div>

            <div
                onClick={e => e.stopPropagation()}
                className={`pass__modal ${isPassModal ? 'pass__modal--visible' : ''}`}
            >
                <Icon
                    onClick={e => closeLinksModal()}
                    className={'links__modal_exit'}
                    icon="ph:x-bold"
                    color="red"
                />
                <MyInput title={'Введите почту'} placeholder={'...@mail.ru'} type={'email'}/>
                <MyInput title={'Введите код'} placeholder={'ZdER23'} type={'text'}/>
            </div>
        </>
    );
};

export default Modal;
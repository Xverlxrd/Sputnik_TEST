import React from 'react';
import MyButton from "@src/Components/UI/MyButton/MyButton";
import '@styles/app.css';
import Modal from "@src/Components/UI/Modal/Modal";

const App = () => {
    const [ isModal, setIsModal ] = React.useState(false)
    const [ isRegModal, setIsRegModal ] = React.useState(false)
    const [ isPassModal, setIsPassModal] = React.useState(false)

    const showModalByPress = (e) => {
        e.stopPropagation()
        setIsModal(true)
    }
    const closeModals = () => {
      if(isModal){
          if(isRegModal){
              setIsRegModal(false)
          }
          else if(isPassModal){
              setIsPassModal(false)
          }
          else if(!isPassModal && !isRegModal){
              setIsModal(false)
          }
      }
    }
    return (
        <div
            onClick={e => closeModals()}
            className={'page__container'}
        >
            <MyButton
                onClick={showModalByPress}
                title={'авторизоваться'}
            />

            <Modal
                isPassModal={isPassModal}
                isRegModal={isRegModal}
                isModal={isModal}

                setIsRegModal={setIsRegModal}
                setIsPassModal={setIsPassModal}
                setIsModal={setIsModal}
            />
        </div>
    );
};

export default App;
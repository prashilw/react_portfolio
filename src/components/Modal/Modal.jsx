import React from 'react';
import ReactDom from 'react-dom';
import { ThemeButton } from '../../styles/GlobalComponents/CustomButton.style';
import { ModalPopup, OverLay, ButtonContainer } from './Modal.style';


const Modal = ({ open, children, onClose }) => {
    console.log(open);
    if (!open) {
        return (null)
    }
    else {
        return ReactDom.createPortal(
            <>
                <OverLay />
                <ModalPopup>
                    {children}
                    <ButtonContainer>
                        <ThemeButton class="close-button" onClick={onClose}>Close</ThemeButton>
                    </ButtonContainer>
                </ModalPopup>
            </>,
            document.getElementById("portal")
        )
    }
}

export default Modal;
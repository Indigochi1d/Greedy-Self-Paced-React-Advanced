import styled from "styled-components";

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 32px 16px;
    border-radius: 8px;
    background: var(--grey-100);
`;

const ModalTitle = styled.h2`
    margin-bottom: 36px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
`;

const ModalContent = styled.div``;

const ButtonContainer = styled.div`
    display: flex;
`;

const Button = styled.button`
    width: 100%;
    height: 44px;
    margin-top: 4px;
    margin-right: 16px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    background: var(--primary-color);
    color: var(--grey-100);
    font-size: 14px;
    line-height: 20px;
    

    &:last-child {
        margin-right: 0;
    }
`;

const Modal = ({ title, onClose, children }) => {
    return (
        <>
            <ModalBackdrop onClick={onClose} />
            <ModalContainer>
                <ModalTitle>{title}</ModalTitle>
                <ModalContent>{children}</ModalContent>
                <ButtonContainer>
                    <Button onClick={onClose}>닫기</Button>
                </ButtonContainer>
            </ModalContainer>
        </>
    );
};

export default Modal;

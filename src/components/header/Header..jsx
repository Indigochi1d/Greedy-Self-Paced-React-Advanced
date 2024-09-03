import styled from "styled-components";
import addButton from "../../../templates/add-button.png";
import {useContext} from "react";
import Contexts from "../../contexts/Contexts.jsx";

const Gnb = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 16px;
    background-color: var(--primary-color);
`;

const GnbTitle = styled.h1`
    color: #fcfcfd;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
`;

const GnbButton = styled.button`
    height: 40px;
    border: none;
    border-radius: 8px;
    background: transparent;
    font-size: 24px;
    cursor: pointer;

    img {
        display: block;
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
`;

const Header = () => {
    const {actions} = useContext(Contexts);
    return (
        <Gnb>
            <GnbTitle>점심 뭐 먹지</GnbTitle>
            <GnbButton
                type="button"
                aria-label="음식점 추가"
                onClick={() => actions.setIsAddModal(true)}
            >
                <img src={addButton} alt="음식점 추가" />
            </GnbButton>
        </Gnb>
    );
};

export default Header;

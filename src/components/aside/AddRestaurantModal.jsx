import styled from "styled-components";
import Modal from "./Modal";
import CategoryKorean from "../../../templates/category-korean.png";
import CategoryChinese from "../../../templates/category-chinese.png";
import CategoryJapanese from "../../../templates/category-japanese.png";
import CategoryWestern from "../../../templates/category-western.png";
import CategoryAsian from "../../../templates/category-asian.png";
import CategoryETC from "../../../templates/category-etc.png";

const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;

    &.required label::after {
        padding-left: 4px;
        color: var(--primary-color);
        content: "*";
    }

    label {
        color: var(--grey-400);
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
    }

    input,
    textarea,
    select {
        padding: 8px;
        margin: 6px 0;
        border: 1px solid var(--grey-200);
        border-radius: 8px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    }

    textarea {
        resize: none;
    }

    select {
        height: 44px;
        padding: 8px;
        border: 1px solid var(--grey-200);
        border-radius: 8px;
        color: var(--grey-300);
    }

    .help-text {
        color: var(--grey-300);
    }
`;

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

const options = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];

const AddRestaurantModal = ({ setIsAddModal }) => {
    const onCloseAddModal = () => {
        setIsAddModal(false);
    };

    const onAddRestaurant = (e) => {
        e.preventDefault();

        const category = e.target.category.value;
        const name = e.target.name.value;
        const description = e.target.description.value;
        let icon;
        switch (category) {
            case "한식":
                icon = CategoryKorean;
                break;
            case "중식":
                icon = CategoryChinese;
                break;
            case "일식":
                icon = CategoryJapanese;
                break;
            case "양식":
                icon = CategoryWestern;
                break;
            case "아시안":
                icon = CategoryAsian;
                break;
            case "기타":
                icon = CategoryETC;
                break;
            default:
                icon = "";
                break;
        }

        const newRestaurant = {
            id: Date.now(),
            category,
            name,
            description,
            icon,
        };
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/restaurants", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newRestaurant),
            });
            console.log(response);
        };

        void fetchData();
        onCloseAddModal();
    };

    return (
        <Modal title="새로운 음식점" onClose={onCloseAddModal}>
            <form onSubmit={onAddRestaurant}>
                <FormItem className="required">
                    <label>카테고리</label>
                    <select name="category" required>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </FormItem>
                <FormItem className="required">
                    <label htmlFor="name">이름</label>
                    <input type="text" name="name" required />
                </FormItem>
                <FormItem>
                    <label htmlFor="description">설명</label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="5"
                    ></textarea>
                    <span className="help-text">
                        메뉴 등 추가 정보를 입력해 주세요.
                    </span>
                </FormItem>
                <ButtonContainer>
                    <Button type="submit">추가하기</Button>
                </ButtonContainer>
            </form>
        </Modal>
    );
};

export default AddRestaurantModal;

import styled from "styled-components";
import CategoryKorean from "../../../templates/category-korean.png";
import CategoryChinese from "../../../templates/category-chinese.png";
import CategoryJapanese from "../../../templates/category-japanese.png";
import CategoryWestern from "../../../templates/category-western.png";
import CategoryAsian from "../../../templates/category-asian.png";
import CategoryETC from "../../../templates/category-etc.png";
import {openModal} from "../../modules/slices/isModalSlice.js";
import {useDispatch} from "react-redux";

const Restaurant = styled.li`
    display: flex;
    align-items: flex-start;
    padding: 16px 8px;
    border-bottom: 1px solid #e9eaed;
`;

const RestaurantCategory = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    margin-right: 16px;
    border-radius: 50%;
    background: var(--lighten-color);
`;

const CategoryIcon = styled.img`
    width: 36px;
    height: 36px;
`;

const RestaurantInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const RestaurantName = styled.h3`
    margin: 0;
`;

const RestaurantDescription = styled.p`
    display: -webkit-box;
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const RestaurantInfo = ({ restaurant, key}) => {
    const dispatch = useDispatch();
    const getCategoryIcon = (category) => {
        switch (category) {
            case "한식":
                return CategoryKorean;
            case "중식":
                return CategoryChinese;
            case "일식":
                return CategoryJapanese;
            case "양식":
                return CategoryWestern;
            case "아시안":
                return CategoryAsian;
            case "기타":
                return CategoryETC;
            default:
                return "";
        }
    }
    const icon = getCategoryIcon(restaurant.category);
    return (
        <Restaurant
            key={key}
            onClick={() => dispatch(openModal({
                name: restaurant.name,
                description: restaurant.description,
            }))}
        >
            <RestaurantCategory>
                <CategoryIcon
                    src={icon}
                    alt={restaurant.category}
                />
            </RestaurantCategory>
            <RestaurantInfoContainer>
                <RestaurantName className="textSubtitle">
                    {restaurant.name}
                </RestaurantName>
                <RestaurantDescription className="textBody">
                    {restaurant.description}
                </RestaurantDescription>
            </RestaurantInfoContainer>
        </Restaurant>
    );
};

export default RestaurantInfo;

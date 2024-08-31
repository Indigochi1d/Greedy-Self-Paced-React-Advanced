import styled from "styled-components";
import RestaurantInfo from "./RestaurantInfo.jsx";

const RestaurantListContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin: 16px 0;
`;

const RestaurantList = ({ filteredRestaurants, setIsModal }) => {
    return (
        <RestaurantListContainer>
            <ul>
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantInfo key={restaurant.id} restaurant={restaurant} setIsModal={setIsModal} />
                ))}
            </ul>
        </RestaurantListContainer>
    );
};

export default RestaurantList;

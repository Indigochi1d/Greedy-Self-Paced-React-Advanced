import { useSelector } from 'react-redux';
import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";

const MainBody = () => {
    const category = useSelector((state) => state.category);
    const restaurants = useSelector((state) => state.restaurants);

    const filteredRestaurants = category === "전체"
        ? restaurants
        : restaurants.filter(restaurant => restaurant.category === category);

    return (
        <>
            <CategoryFilter />
            <RestaurantList filteredRestaurants={filteredRestaurants} />
        </>
    );
};

export default MainBody;

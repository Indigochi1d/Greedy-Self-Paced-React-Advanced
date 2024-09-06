import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";
import {RestaurantsAtom,CategoryAtom} from "../../store/index.js";
import {useRecoilValue} from "recoil";

const MainBody = () => {
    const category = useRecoilValue(CategoryAtom);
    const restaurants = useRecoilValue(RestaurantsAtom);

    let filteredRestaurants;
    if(category === "전체"){
        filteredRestaurants = restaurants;
    }
    if(category !== "전체"){
        filteredRestaurants = restaurants.filter(restaurant => restaurant.category === category);
    }
    return (
        <>
            <CategoryFilter/>
            <RestaurantList filteredRestaurants={filteredRestaurants} />
        </>


    );
};

export default MainBody;
import CategoryFilter from "./CategoryFilter.jsx";
import RestaurantList from "./RestaurantList.jsx";
import {useContext} from "react";
import Contexts from "../../contexts/Contexts.jsx";

const MainBody = () => {
    const {state} = useContext(Contexts);

    let filteredRestaurants;
    if(state.category === "전체"){
        filteredRestaurants = state.restaurants;
    }
    if(state.category !== "전체"){
        filteredRestaurants = state.restaurants.filter(restaurant => restaurant.category === state.category);
    }
    return (
        <>
            <CategoryFilter/>
            <RestaurantList filteredRestaurants={filteredRestaurants} />
        </>


    );
};

export default MainBody;
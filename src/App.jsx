import "./App.css";
import HeaderContainer from "./containers/HeaderContainer.jsx";
import MainContainer from "./containers/MainContainer.jsx";
import AsideContainer from "./containers/AsideContainer.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setRestaurants} from "./modules/slices/restaurantsSlice.js";

function App() {
    const restaurants = useSelector((state)=>state.restaurants);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/restaurants");
            const data = await response.json();
            if(data !== restaurants){
                dispatch(setRestaurants(data));
            }
        }
        void fetchData();
    }, [dispatch]);

    return (
        <>
            <HeaderContainer/>
            <MainContainer />
            <AsideContainer/>
        </>
    );
}

export default App;
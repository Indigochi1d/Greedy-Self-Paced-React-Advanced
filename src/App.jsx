import "./App.css";
import HeaderContainer from "./containers/HeaderContainer.jsx";
import MainContainer from "./containers/MainContainer.jsx";
import AsideContainer from "./containers/AsideContainer.jsx";
import {RestaurantsAtom} from "./store/index.js";
import {useRecoilState} from "recoil";
import {useEffect} from "react";

function App() {

    const [restaurants, setRestaurants] = useRecoilState(RestaurantsAtom);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/restaurants");
            const data = await response.json();
            if(data !== restaurants){
                setRestaurants(data);
            }
        }
        void fetchData();
    }, [restaurants]);

    return (
        <>
            <HeaderContainer/>
            <MainContainer />
            <AsideContainer/>
        </>
    );
}

export default App;
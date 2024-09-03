import "./App.css";
import HeaderContainer from "./containers/HeaderContainer.jsx";
import MainContainer from "./containers/MainContainer.jsx";
import AsideContainer from "./containers/AsideContainer.jsx";
import {useContext, useEffect} from "react";
import Contexts from "./contexts/Contexts.jsx";

function App() {
    const {state,actions} = useContext(Contexts);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/restaurants");
            const data = await response.json();
            if(data !== state.restaurants){
                actions.setRestaurants(data);
            }
        }
        void fetchData();
    }, [state.restaurants]);

    return (
        <>
            <HeaderContainer/>
            <MainContainer />
            <AsideContainer/>
        </>
    );
}

export default App;
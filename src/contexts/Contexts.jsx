import {createContext, useState} from "react";

const Contexts = createContext({
    state: {
        isModal: {
            isOpen: false,
            restaurant: {
                name: "",
                description: ""
            }
        },
        isAddModal: false,
        restaurants: [],
        category: "전체"
    },
    actions: {
        setIsModal: () => {
        },
        setIsAddModal: () => {
        },
        setRestaurants: () => {
        },
        setCategory: () => {
        }
    }
});

// eslint-disable-next-line react/prop-types
export const Providers = ({children}) => {
    const [isModal, setIsModal] = useState(false);
    const [isAddModal, setIsAddModal] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const [category, setCategory] = useState("전체");
    const value = {
        state: {isModal, isAddModal, restaurants, category},
        actions: {setIsModal, setIsAddModal, setRestaurants, setCategory},
    }
    return (
        <Contexts.Provider value={value}>{children}</Contexts.Provider>
    );
};



export default Contexts
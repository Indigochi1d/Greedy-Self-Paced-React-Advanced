import AddModal from "./AddRestaurantModal.jsx";
import InformationModal from "./RestaurantDetailModal.jsx";
import Contexts from "../../contexts/Contexts.jsx";
import {useContext} from "react";

const Aside = () => {
    const {state} = useContext(Contexts);
    return (
        <aside>
            {state.isAddModal && <AddModal/>}
            {state.isModal.isOpen && <InformationModal/>}
        </aside>
    );
};

export default Aside;
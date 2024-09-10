import AddModal from "./AddRestaurantModal.jsx";
import InformationModal from "./RestaurantDetailModal.jsx";
import {useSelector} from "react-redux";

const Aside = () => {
    const isAddModal = useSelector((state)=>state.isAddModalSlice);
    const isModal = useSelector((state)=>state.isModalSlice);
    return (
        <aside>
            {isAddModal && <AddModal/>}
            {isModal.isOpen && <InformationModal/>}
        </aside>
    );
};

export default Aside;
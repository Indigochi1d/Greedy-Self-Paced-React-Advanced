import AddModal from "./AddRestaurantModal.jsx";
import InformationModal from "./RestaurantDetailModal.jsx";
import {IsAddModalAtom,IsModalAtom} from "../../store/index.js";
import {useRecoilValue} from "recoil";

const Aside = () => {
    const isAddModal = useRecoilValue(IsAddModalAtom);
    const isModal = useRecoilValue(IsModalAtom);
    return (
        <aside>
            {isAddModal && <AddModal/>}
            {isModal.isOpen && <InformationModal/>}
        </aside>
    );
};

export default Aside;
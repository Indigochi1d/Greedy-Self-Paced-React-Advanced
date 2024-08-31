import AddModal from "./AddRestaurantModal.jsx";
import InformationModal from "./RestaurantDetailModal.jsx";

const Aside = ({isModal,setIsModal,isAddModal,setIsAddModal}) => {
    return (
        <aside>
            {isAddModal && <AddModal setIsAddModal={setIsAddModal}  />}
            {isModal.isOpen && <InformationModal isModal={isModal} setIsModal={setIsModal} />}
        </aside>
    );
};

export default Aside;
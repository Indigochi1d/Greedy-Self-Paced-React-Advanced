import Modal from "./Modal";
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../modules/slices/isModalSlice.js";

const RestaurantDetailModal = () => {
    const dispatch = useDispatch();
    const isModal = useSelector((state) => state.isModalSlice);
    const onCloseModal = () => {
        dispatch(closeModal());
    };
    return (
        <Modal title={isModal.restaurant.name} onClose={onCloseModal}>
            <div>
                <p>{isModal.restaurant.description}</p>
            </div>
        </Modal>
    );
};

export default RestaurantDetailModal;

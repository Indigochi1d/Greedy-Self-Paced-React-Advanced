import Modal from "./Modal";
import {useContext} from "react";
import Contexts from "../../contexts/Contexts.jsx";

const RestaurantDetailModal = () => {
    const {state,actions} = useContext(Contexts);

    const onCloseModal = () => {
        actions.setIsModal({
            isOpen: false,
            restaurant: {
                name: "",
                description: "",
            },
        });
    };

    return (
        <Modal title={state.isModal.restaurant.name} onClose={onCloseModal}>
            <div>
                <p>{state.isModal.restaurant.description}</p>
            </div>
        </Modal>
    );
};

export default RestaurantDetailModal;

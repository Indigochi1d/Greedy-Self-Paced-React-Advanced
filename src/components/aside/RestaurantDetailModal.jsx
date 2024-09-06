import Modal from "./Modal";
import {useRecoilState} from "recoil";
import {IsModalAtom} from "../../store/index.js";

const RestaurantDetailModal = () => {
    const [isModal,setIsModal] = useRecoilState(IsModalAtom);


    const onCloseModal = () => {
        setIsModal({
            isOpen: false,
            restaurant: {
                name: "",
                description: "",
            },
        });
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

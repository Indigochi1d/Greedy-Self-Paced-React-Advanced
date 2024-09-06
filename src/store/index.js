import {atom} from "recoil";


export const IsAddModalAtom = atom({
    key: 'IsAddModalAtom',
    default: false,
});

export const IsModalAtom = atom({
    key: 'IsModalAtom',
    default: {
        isOpen: false,
        restaurant: {
            name: "",
            description: "",
        }
    }
});

export const RestaurantsAtom = atom({
    key: 'RestaurantsAtom',
    default: []
});

export const CategoryAtom = atom({
    key: 'CategoryAtom',
    default: "전체"
})

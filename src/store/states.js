import {
    atom,
    RecoilRoot,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export const isDarkState = atom({
    key: 'isDarkState',
    default: false
})

export const storeSearchedItems = atom({
    key: 'storeSearchedItems',
    default: []
})

export const sidebar = atom({
    key: 'sidebar',
    default: false
})
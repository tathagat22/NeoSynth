import {create} from "zustand";

interface useProModalStore {
    isOPen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useProModal = create<useProModalStore>((set) => ({
    isOPen: true,
    onOpen: () => set({isOPen: true}),
    onClose: () => set({isOPen: false}),
}));
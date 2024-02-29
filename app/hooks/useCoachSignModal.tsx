import { create } from 'zustand';

interface CoachSignModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCoachSignModal = create<CoachSignModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useCoachSignModal;
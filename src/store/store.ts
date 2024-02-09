// useInterfaceStore.ts
import { create } from 'zustand';
import { StateName } from '../types/types';

type InterfaceState = {
  state: StateName;
  setState: (newState: StateName, onBefore?: () => void, onAfter?: () => void) => void;
};

const useInterfaceStore = create<InterfaceState>((set) => ({
  state: 'base', // État initial
  setState: (newState, onBefore = () => {}, onAfter = () => {}) => {
    onBefore(); // Exécuté avant la mise à jour de l'état
    set({ state: newState });
    onAfter(); // Exécuté après la mise à jour de l'état
  },
}));

export default useInterfaceStore;

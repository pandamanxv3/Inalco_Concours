// useInterfaceStore.ts
import { create } from 'zustand';
import { StateName } from '../types/types';
import gsap from 'gsap';
import { PerspectiveCamera } from 'three';

type InterfaceState = {
	state: StateName;
	rotationY: number;
	setRotationY: (newRotationY: number) => void;
	setState: (newState: StateName, onBefore?: () => Promise<void>, onAfter?: () => void) => void;
	triggerCameraRotation: (rotationParams: { x: number, y: number, z: number }, camera: PerspectiveCamera) => Promise<void>;
};

const useInterfaceStore = create<InterfaceState>((set) => ({
	state: 'base', // État initial
	setState: async (newState, onBefore = async () => {}, onAfter = () => { }) => {
		await onBefore(); // Exécuté avant la mise à jour de l'état
		set({ state: newState });
		onAfter(); // Exécuté après la mise à jour de l'état
	},
	rotationY: -1.31433,
	setRotationY: (newRotationY: number) => {
		set({ rotationY: newRotationY });
	},
	triggerCameraRotation: (rotationParams: { x: number, y: number, z: number }, camera: PerspectiveCamera) => {
		return new Promise((resolve) => {
		  if (camera) {
			gsap.to(camera.rotation, {
			  x: rotationParams.x,
			  y: rotationParams.y,
			  z: rotationParams.z,
			  duration: 3,
			  ease: "power3.inOut",
			  onComplete: () => {
				resolve();
			  }
			});
			} else {
				console.error("Camera ref is not available.");
				resolve(); // Résoudre la promesse même en cas d'erreur pour ne pas bloquer le flux d'exécution
			}
		});
	},
}));

export default useInterfaceStore;

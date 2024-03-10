// useInterfaceStore.ts
import { create } from 'zustand';
import { StateName } from '../types/types';
import gsap from 'gsap';
import { Group, Mesh, PerspectiveCamera, MeshPhysicalMaterial } from "three";
import { initialConfig } from './initialConfig';

type BeforeAfterAction = () => void | Promise<void>;

type InterfaceState = {
	state: StateName;
	setState: (newState: StateName, onBefore?: BeforeAfterAction | BeforeAfterAction[], onAfter?: () => void) => void;
	setStateAwait: (newState: StateName, onBefore?: () => Promise<void>, onAfter?: () => void) => void;

	rotationY: number;
	setRotationY: (newRotationY: number) => void;

	triggerCameraRotation: (camera: PerspectiveCamera) => void;
	screenChangeAnimation: (ScreenRef: Mesh) => void;
	popAnimation: (character: Group, animal: Group) => void;
	popOutAnimation: (character: Group, animal: Group) => Promise<void>;
};

const useInterfaceStore = create<InterfaceState>((set) => ({
	state: 'base',
	setStateAwait: async (newState, onBefore = async () => { }, onAfter = () => { }) => {
		await onBefore(); // Exécuté avant la mise à jour de l'état
		set({ state: newState });
		onAfter();
	},
	setState: (newState, onBefore = () => { }, onAfter = () => { }) => {
		const beforeActions = Array.isArray(onBefore) ? onBefore : [onBefore];

		// Exécuter chaque action sans attendre leur achèvement
		beforeActions.forEach((action) => {
			action();
		});

		set({ state: newState });
		onAfter();
	},

	rotationY: -1.31433,
	setRotationY: (newRotationY: number) => {
		set({ rotationY: newRotationY });
	},


	popAnimation(character: Group, animal: Group) {
		const targetAnimalPos = initialConfig.intialAnimalPosition!;
		animal.position.set(targetAnimalPos[0], targetAnimalPos[1], -70);

		character.position.z = -25;
		gsap.to(animal.position, {
			x: targetAnimalPos[0],
			y: targetAnimalPos[1],
			z: targetAnimalPos[2],
			duration: 3,
		});
		gsap.to(character.position, {
			z: 0,
			duration: 2,

		});
	},
	popOutAnimation: (character: Group, animal: Group) => {
		return new Promise<void>((resolve) => {
			const targetAnimalPos = initialConfig.intialAnimalPosition!;
			gsap.to(animal.position, {
				x: targetAnimalPos[0],
				y: targetAnimalPos[1],
				z: 160,
				duration: 2,
				ease: "power1.in",

			});
			gsap.to(character.position, {
				z: 110,
				duration: 3,
				ease: "power1.in",
				onComplete: () => {
					resolve();
				}
			});
		});
	},

	screenChangeAnimation: (ScreenRef: Mesh) => {
		ScreenRef.scale.y = 1;
		ScreenRef.scale.x = 1;
		ScreenRef.rotation.y = Math.PI * 0.5;
		const material = ScreenRef.material;

		if (material instanceof MeshPhysicalMaterial) {
			material.thickness = 0.3;
			gsap.to(material, {
				thickness: 100,
				duration: 3,
				ease: "power3.inOut",
				yoyo: true,
				repeat: 1,
			});
		}
		gsap.to(ScreenRef.scale, {
			y: 0.3,
			x: 0.3,
			duration: 3,
			ease: "power3.inOut",
			yoyo: true,
			repeat: 1,
		});

		gsap.to(ScreenRef.rotation, {
			y: Math.PI * 1.5,
			duration: 6,
			ease: "power3.inOut",
		});
	},

	triggerCameraRotation: (camera: PerspectiveCamera) => {
		const { rotationY } = useInterfaceStore.getState();
		if (camera) {
			gsap.to(camera.rotation, {
				y: rotationY,
				duration: 3,
				ease: "power3.inOut",
			});
		} else {
			console.error("Camera ref is not available.");
		}
	},

	// triggerInitialAnimation:

}));

export default useInterfaceStore;
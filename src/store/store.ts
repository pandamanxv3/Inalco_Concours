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

	endAnimationIntro: boolean;
	experienceStarted: boolean;
	startExperience: (CameraRef: PerspectiveCamera, Env: Group, Char: Group, Animal: Group, play: (number: number) => void, reset: () => void) => void;
	resetExperience: (environment: Group, character: Group, animal: Group, reset: () => void) => void;
	setExperienceStarted: (newExperienceStarted: boolean) => void;
	timer: number;
	updateTimer: (elapsedTime: number) => void;
	language: StateName;
	setLanguage: (newLanguage: StateName) => void;

	rotationY: number;
	setRotationY: (newRotationY: number) => void;

	animation: gsap.core.Tween | null;
	triggerCameraRotation: (camera: PerspectiveCamera) => void;
	screenChangeAnimation: (ScreenRef: Mesh) => void;
	popAnimation: (character: Group, animal: Group) => void;
	popOutAnimation: (character: Group, animal: Group) => Promise<void>;
};

const useInterfaceStore = create<InterfaceState>((set) => ({
	/* State */
	state: 'base',
	setStateAwait: async (newState, onBefore = async () => { }, onAfter = () => { }) => {
		await onBefore();
		set({ state: newState });
		onAfter();
	},
	setState: (newState, onBefore = () => { }, onAfter = () => { }) => {
		const beforeActions = Array.isArray(onBefore) ? onBefore : [onBefore];
		beforeActions.forEach((action) => {
			action();
		});
		set({ state: newState });
		onAfter();
	},

	/* Experience */
	endAnimationIntro: false,
	experienceStarted: false,
	setExperienceStarted: (newExperienceStarted: boolean) => {
		set({ experienceStarted: newExperienceStarted });
	},
	startExperience: (CameraRef: PerspectiveCamera, Env: Group, Char: Group, Animal: Group, play: (number: number) => void, reset: () => void) => {
		const { setState, setStateAwait, triggerCameraRotation, popAnimation, resetExperience } = useInterfaceStore.getState();
		const { maxZEnv, totalTimeAnimation } = initialConfig;

		// const todoBefore = () => {
		// 	return new Promise<void>((resolve) => {
		// 		set({ endAnimationIntro: true })
		// 		gsap.to(Env.position, {
		// 			duration: 2,
		// 			onComplete: () => {
		// 				set({ experienceStarted: true });

		// 				resolve();
		// 			},
		// 		});
		// 	});
		// };

		// const toDoAfter = () => {
		// 	triggerCameraRotation(CameraRef!);
		// 	() => popAnimation(Char, Animal);
		// 	() => play(1);
		// 	const animation = gsap.to(Env.position, {
		// 		duration: totalTimeAnimation,
		// 		z: maxZEnv,
		// 		onComplete: () => {
		// 			resetExperience(Env, Char, Animal, reset);
		// 		},
		// 	});
		// 	set({ animation: animation });

		// }

		// setStateAwait('FR', todoBefore, toDoAfter);
		set({ experienceStarted: true });

		setState('FR', [
			() => triggerCameraRotation(CameraRef!),
			() => {
				const targetAnimalPos = initialConfig.intialAnimalPosition!;
				Animal.position.set(targetAnimalPos[0], targetAnimalPos[1], -70);
				Char.position.z = -50;
				setTimeout(() => popAnimation(Char, Animal), 2000)
			},
			() => play(1)]);
		const animation = gsap.to(Env.position, {
			duration: totalTimeAnimation,
			z: maxZEnv,
			onComplete: () => {
				resetExperience(Env, Char, Animal, reset);
			},
		});
		set({ animation: animation });
	},
	resetExperience: (Env: Group, Character: Group, Animal: Group, reset: () => void) => {
		const { initialEnvPosition } = initialConfig;
		const { setStateAwait, popOutAnimation, animation } = useInterfaceStore.getState();

		setStateAwait('base',
			() => {
				return (popOutAnimation(Character, Animal));
			},
			() => {
				reset();
				set({ timer: 0 });
				if (Env) {
					animation!.kill();
					set({ experienceStarted: false });
					Env.position.set(initialEnvPosition[0], initialEnvPosition[1], initialEnvPosition[2]);
				}
			});
	},

	timer: 0,
	updateTimer: (elapsedTime: number) => {
		set({ timer: elapsedTime });
	},

	/* Language */
	language: 'FR',
	setLanguage: (newLanguage: StateName) => {
		if (newLanguage === 'base')
			newLanguage = 'FR';
		else
			set({ language: newLanguage });
	},

	/* Camera */
	rotationY: -1.31433,
	setRotationY: (newRotationY: number) => {
		set({ rotationY: newRotationY });
	},
	animation: null,

	/* Animations */
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
		const { initialScaleScreen } = initialConfig;
		ScreenRef.scale.y = initialScaleScreen;
		ScreenRef.scale.x = initialScaleScreen;
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

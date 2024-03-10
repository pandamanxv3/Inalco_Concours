import { StateConfig } from "../types/types";

export const initialConfig: StateConfig = {
	name: 'base',
	buttonText: "Base",
	onBefore: () => console.log("Transition vers Base"),
	onAfter: () => console.log("Arrivé sur Base"),
	initialScreenXRotation: 0,
	initialScreenPosition: [50, 30, 40],
	initialCharacterPosition: [0, 0, 0],
	initialEnvPosition: [1, 22, 20],
	intialAnimalPosition: [20, 5, 40]
};

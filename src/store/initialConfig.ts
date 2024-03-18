import { SceneConfig } from "../types/types";

export const initialConfig: SceneConfig = {
	name: 'base',
	buttonText: "Base",

	initialScreenXRotation: [0, Math.PI * 0.5, 0],
	initialScreenPosition: [50, 30, 40],
	initialScaleScreen: 1.5,

	initialCharacterPosition: [0, 0, 0],
	intialAnimalPosition: [20, 5, 40],

	initialEnvPosition: [1, 10, 8],
	maxZEnv: -387,
	totalTimeAnimation: 135
};

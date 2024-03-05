import { StateConfig } from "../types/types";

export const initialConfig: StateConfig = {
	name: 'base',
	buttonText: "Base",
	onBefore: () => console.log("Transition vers Base"),
	onAfter: () => console.log("Arrivé sur Base")
};

import { StatesConfig } from "../types/types";

export const sceneConfig: StatesConfig = [
	{
		name: 'KR',
		buttonText: "Corée",
		onBefore: () => console.log("Transition vers KR"),
		onAfter: () => console.log("Arrivé sur KR")
	},
	{
		name: 'FR',
		buttonText: "France",
		onBefore: () => console.log("Transition vers FR"),
		onAfter: () => console.log("Arrivé sur FR")
	},
	{
		name: 'DZ',
		buttonText: "Algérie",
		onBefore: () => console.log("Transition vers DZ"),
		onAfter: () => console.log("Arrivé sur DZ")
	},
];
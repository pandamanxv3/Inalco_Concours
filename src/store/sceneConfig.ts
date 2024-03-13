import { StatesConfig } from "../types/types";

export const sceneConfig: StatesConfig = [
	{
		name: 'KR',
		buttonText: "Corée",
		buttonImg: "/img/Icon_bird.png",
		onBefore: () => console.log("Transition vers KR"),
		onAfter: () => console.log("Arrivé sur KR")
	},
	{
		name: 'FR',
		buttonText: "France",
		buttonImg: "/img/Icon_puma.png",
		onBefore: () => console.log("Transition vers FR"),
		onAfter: () => console.log("Arrivé sur FR")
	},
	{
		name: 'DZ',
		buttonText: "Algérie",
		buttonImg: "/img/Icon_snake.png",
		onBefore: () => console.log("Transition vers DZ"),
		onAfter: () => console.log("Arrivé sur DZ")
	},
];
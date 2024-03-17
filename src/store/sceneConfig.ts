import { StatesConfig } from "../types/types";
import { arabicSubtitle, frSubtitle, krSubtitle } from "./subtitle";

export const sceneConfig: StatesConfig = [
	{
		name: 'KR',
		buttonText: "Corée",
		buttonImg: "/img/Icon_bird.png",
		subtitle: krSubtitle,
	},
	{
		name: 'FR',
		buttonText: "France",
		buttonImg: "/img/Icon_puma.png",
		subtitle: frSubtitle,
	},
	{
		name: 'DZ',
		buttonText: "Algérie",
		buttonImg: "/img/Icon_snake.png",
		subtitle: arabicSubtitle,
	},
];
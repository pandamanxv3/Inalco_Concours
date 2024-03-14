
export type StateName = 'base' | 'KR' | 'FR' | 'DZ';

export interface StateConfig {
	name: StateName;
	buttonText: string; 
	buttonImg: string;
  }

  export type StatesConfig = StateConfig[];

  export interface SceneConfig {
	name: StateName;
	buttonText: string; 

	initialScreenXRotation: number;
	initialScreenPosition: [number, number, number];
	initialScaleScreen: number;
	
	initialCharacterPosition: [number, number, number];
	intialAnimalPosition: [number, number, number];
	
	initialEnvPosition: [number, number, number];
	maxZEnv: number;
	totalTimeAnimation: number;

  }

  
  export type TextConfig = {
	name: StateName;
	context: string;
	explication:string;
	soundInfo: string;
	title: string;
  };
  
  export type TextsConfig = TextConfig[];

export type StateName = 'base' | 'KR' | 'FR' | 'DZ';

export interface StateConfig {
	name: StateName;
	onBefore?: () => Promise<void> | void;
	onAfter?: () => void;
	buttonText: string; 
	buttonImg?: string;
	initialScreenXRotation?: number;
	initialScreenPosition?: [number, number, number];
	initialCharacterPosition?: [number, number, number];
	initialEnvPosition?: [number, number, number];
	intialAnimalPosition?: [number, number, number];

  }

  export type StatesConfig = StateConfig[];

  export type TextConfig = {
	name: StateName;
	context: string;
	explication:string;
	soundInfo: string;
	title: string;
  };
  
  export type TextsConfig = TextConfig[];
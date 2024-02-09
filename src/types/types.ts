
export type StateName = 'base' | 'KR' | 'FR' | 'DZ';

export interface StateConfig {
	name: StateName;
	onBefore?: () => Promise<void> | void;
	onAfter?: () => void;
	buttonText: string; 
  }

  export type StatesConfig = StateConfig[];
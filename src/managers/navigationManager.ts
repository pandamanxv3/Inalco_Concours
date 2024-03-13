import { useMeshState } from '../store/ContextBoard';
import { sceneConfig } from '../store/sceneConfig';
import useInterfaceStore from '../store/store';
import { StateName } from '../types/types';

export const useNavigation = () => {
	const { state, setStateAwait, popAnimation, popOutAnimation, screenChangeAnimation, setLanguage, language } = useInterfaceStore();
	const { CharRef, AnimalRef, screenRef } = useMeshState().meshRefs;
	
	const currentLanguageIndex = sceneConfig.findIndex(item => item.name === language);
	const setCurrentLanguage = (newLanguage: StateName) => {
		setLanguage(newLanguage);
	}
	
	const currentIndex = sceneConfig.findIndex(item => item.name === state);
	const previousIndex = (currentIndex - 1 + sceneConfig.length) % sceneConfig.length;
	const nextIndex = (currentIndex + 1) % sceneConfig.length;
	
	const onNext = () => {
		const nextState = sceneConfig[nextIndex];
		screenChangeAnimation(screenRef.current!);
		setStateAwait(nextState.name, () => popOutAnimation(CharRef.current!, AnimalRef.current!), () => popAnimation(CharRef.current!, AnimalRef.current!));
		setLanguage(nextState.name);
	};

	const onPrevious = () => {
		screenChangeAnimation(screenRef.current!);
		const prevState = sceneConfig[previousIndex];
		setStateAwait(prevState.name, () => popOutAnimation(CharRef.current!, AnimalRef.current!), () => popAnimation(CharRef.current!, AnimalRef.current!));
		setLanguage(prevState.name);
	};

	return { onNext, onPrevious, currentIndex, previousIndex, nextIndex, setCurrentLanguage, currentLanguageIndex };
};
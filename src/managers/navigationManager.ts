import { useMeshState } from '../store/ContextBoard';
import { sceneConfig } from '../store/sceneConfig';
import useInterfaceStore from '../store/store';

export const useNavigation = () => {
	const { state, setStateAwait, popAnimation, popOutAnimation, screenChangeAnimation } = useInterfaceStore();
	const {CharRef, AnimalRef, screenRef} = useMeshState().meshRefs;
	const currentIndex = sceneConfig.findIndex(item => item.name === state);
	const previousIndex = (currentIndex - 1 + sceneConfig.length) % sceneConfig.length;
	const nextIndex = (currentIndex + 1) % sceneConfig.length;


	const onNext = () => {
		const nextState = sceneConfig[nextIndex];
		screenChangeAnimation(screenRef.current!);
		setStateAwait(nextState.name, () => popOutAnimation(CharRef.current!, AnimalRef.current!), () => popAnimation(CharRef.current!, AnimalRef.current!));
	};

	const onPrevious = () => {
		screenChangeAnimation(screenRef.current!);
		const prevState = sceneConfig[previousIndex];
		setStateAwait(prevState.name, () => popOutAnimation(CharRef.current!, AnimalRef.current!), () => popAnimation(CharRef.current!, AnimalRef.current!));
	};

	return { onNext, onPrevious, currentIndex, previousIndex, nextIndex };
};
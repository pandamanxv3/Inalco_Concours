import { sceneConfig } from '../store/sceneConfig';
import useInterfaceStore from '../store/store';

export const useNavigation = () => {
	const { state, setState } = useInterfaceStore();
	const currentIndex = sceneConfig.findIndex(item => item.name === state);
	const previousIndex = (currentIndex - 1 + sceneConfig.length) % sceneConfig.length;
	const nextIndex = (currentIndex + 1) % sceneConfig.length;

	const onNext = () => {
		const nextState = sceneConfig[nextIndex];
		setState(nextState.name, sceneConfig[currentIndex].onBefore, nextState.onAfter);
	};

	const onPrevious = () => {
		const prevState = sceneConfig[previousIndex];
		setState(prevState.name, sceneConfig[currentIndex].onBefore, prevState.onAfter);
	};

	return { onNext, onPrevious, currentIndex, previousIndex, nextIndex };
};
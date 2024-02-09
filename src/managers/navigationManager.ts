import { sceneConfig } from '../store/sceneConfig';
import useInterfaceStore from '../store/store';

export const useNavigation = () => {
  const { state, setState } = useInterfaceStore();

  const findIndex = (stateName: string) => {
    return sceneConfig.findIndex(item => item.name === stateName);
  };

  const onNext = () => {
    const currentIndex = findIndex(state);
    const nextIndex = (currentIndex + 1) % sceneConfig.length;
    const nextState = sceneConfig[nextIndex];

    setState(nextState.name, sceneConfig[currentIndex].onBefore, nextState.onAfter);
  };

  const onPrevious = () => {
    const currentIndex = findIndex(state);
    const prevIndex = (currentIndex - 1 + sceneConfig.length) % sceneConfig.length;
    const prevState = sceneConfig[prevIndex];

    setState(prevState.name, sceneConfig[currentIndex].onBefore, prevState.onAfter);
  };
  // TODO:
  // - une fonction pour revenir à l'état initial
  // - une fonction pour lancer l'expérience (sur DZ)

  return { onNext, onPrevious };
};

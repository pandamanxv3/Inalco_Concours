import styled, { css, keyframes } from 'styled-components';
import { useMeshState } from '../../store/ContextBoard';
import useInterfaceStore from '../../store/store';
import ChangeSceneButton, { ButtonContainer } from './ChangeSceneButton';

const fadeInAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const ButtonContainerAnimated = styled(ButtonContainer) <{ $isVisible: boolean }>`
	opacity: 0;
	animation: ${props => props.$isVisible ? css`${fadeInAnimation} 1s ease-out forwards` : 'none'};
`;

const ButtonInterface = () => {
	const { setState, state, triggerCameraRotation, rotationY } = useInterfaceStore();
	const { cameraRef } = useMeshState().meshRefs; // Valide ici

	const handleInitialChangeState = () => {
		if (cameraRef.current !== null) {
			setState('DZ', () => triggerCameraRotation({ x: -1.57, y: rotationY, z: -1.57172 }, cameraRef.current!));
		}
	};
	return (
		<>
			{state === 'base' ?
				<>
					<button onClick={handleInitialChangeState}>GO</button>
					<ButtonContainerAnimated $direction="up" $isVisible={false}>
						<ChangeSceneButton direction="up" />
					</ButtonContainerAnimated>
					<ButtonContainerAnimated $direction="down" $isVisible={false}>
						<ChangeSceneButton direction="down" />
					</ButtonContainerAnimated>
				</>
				:
				<>
					<button onClick={() => setState('base')}>Retour</button>
					<ButtonContainerAnimated $direction="up" $isVisible={true}>
						<ChangeSceneButton direction="up" />
					</ButtonContainerAnimated>
					<ButtonContainerAnimated $direction="down" $isVisible={true}>
						<ChangeSceneButton direction="down" />
					</ButtonContainerAnimated>
				</>}
		</>
	);
}

export default ButtonInterface;

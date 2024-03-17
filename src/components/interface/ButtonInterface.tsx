import styled, { css, keyframes } from 'styled-components';
import { useMeshState } from '../../store/ContextBoard';
import useInterfaceStore from '../../store/store';
import ChangeSceneButton, { ButtonContainer } from './ChangeSceneButton';
import { useMusicPlayerz } from '../../managers/contextMusic';

const fadeInAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const ButtonStart = styled.button`
	position: absolute;
	font-family: 'Astonia', sans-serif;
	font-size: 1.5em;
	padding: 10px;
	border-radius: 5px;
	background-color: #ffffff;
	color: #000000;
`;

const ButtonContainerAnimated = styled(ButtonContainer) <{ $isVisible: boolean }>`
	opacity: 0;
	animation: ${props => props.$isVisible ? css`${fadeInAnimation} 1s 1s ease-out forwards` : 'none'};
`;

const ButtonInterface = () => {
	const { resetExperience, state, startExperience, setExperienceStarted } = useInterfaceStore.getState();
	const { cameraRef, CharRef: Char, AnimalRef: Animal, EnvRef: Env } = useMeshState().meshRefs; // Valide ici
	const { play, reset } = useMusicPlayerz();

	const handleInitialChangeState = () => {
		console.log('handleInitialChangeState');
		setExperienceStarted(true);
		startExperience(cameraRef.current!, Env.current!, Char.current!, Animal.current!, play, reset);
	};

	const handleResetChangeState = () => {
		resetExperience(Env.current!, Char.current!, Animal.current!, reset);
	}

	return (
		<>
			{state === 'base' ?
				<>
					<ButtonStart style={{ fontFamily: 'Astonia', fontSize: '1.5em', padding: '10px', borderRadius: '5px', backgroundColor: '#ffffff', color: '#000000' }}
						onClick={handleInitialChangeState}>GO</ButtonStart>
					<ButtonContainerAnimated $direction="up" $isVisible={false}>
						<ChangeSceneButton direction="up" />
					</ButtonContainerAnimated>
					<ButtonContainerAnimated $direction="down" $isVisible={false}>
						<ChangeSceneButton direction="down" />
					</ButtonContainerAnimated>
				</>
				:
				<>
					<ButtonStart style={{ fontFamily: 'Astonia', fontSize: '1.5em', padding: '10px', borderRadius: '5px', backgroundColor: '#ffffff', color: '#000000' }} onClick={handleResetChangeState}>Retour</ButtonStart>
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

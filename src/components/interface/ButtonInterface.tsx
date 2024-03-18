import styled, { css, keyframes } from 'styled-components';
import { useMeshState } from '../../store/ContextBoard';
import useInterfaceStore from '../../store/store';
import ChangeSceneButton, { ButtonContainer } from './ChangeSceneButton';
import { useMusicPlayerz } from '../../managers/contextMusic';

const fadeInAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const ButtonStart = styled.div`
	position: absolute;
	font-family: 'sincopaElla', sans-serif;
	padding: 10px;
	height: 30vh;
	width: 30vw;
	border-radius: 5px;
	cursor: pointer;
	top: 40vh;
	left: 50vw;
	transform: translate(-50%, -50%);
	
`;

const ButtonReturn = styled.div`
	position: absolute;
	font-family: 'sincopa', sans-serif;
	height: 40px;
	width: 90px;
	font-size: 1.5em;
	border-radius: 5px;
	color: #ffffff;
	cursor: pointer;
	top: 40px;
	left: 20px;
	/* left: 10vw; */
	transform: translateY(-50%);

	&:hover {
		color: #c6a283;
	}
	
`;

const ButtonContainerAnimated = styled(ButtonContainer) <{ $isVisible: boolean }>`
	opacity: 0;
	animation: ${props => props.$isVisible ? css`${fadeInAnimation} 1s 1s ease-out forwards` : 'none'};
`;

const ButtonInterface = () => {
	const { resetExperience, state, startExperience, setExperienceStarted, canStart } = useInterfaceStore.getState();
	const { cameraRef, CharRef: Char, AnimalRef: Animal, EnvRef: Env } = useMeshState().meshRefs; // Valide ici
	const { play, reset } = useMusicPlayerz();

	const retour:string = "< Retour";
	const handleInitialChangeState = () => {
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
					{canStart && <ButtonStart onClick={handleInitialChangeState} />}
					<ButtonContainerAnimated $direction="up" $isVisible={false}>
						<ChangeSceneButton direction="up" />
					</ButtonContainerAnimated>
					<ButtonContainerAnimated $direction="down" $isVisible={false}>
						<ChangeSceneButton direction="down" />
					</ButtonContainerAnimated>
				</>
				:
				<>
					<ButtonReturn onClick={handleResetChangeState}>{retour}</ButtonReturn>
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

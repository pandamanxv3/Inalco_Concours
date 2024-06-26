import styled, { keyframes, css } from 'styled-components';
import { useNavigation } from '../../managers/useNavigation';
import { sceneConfig } from '../../store/sceneConfig';
import { useEffect, useState } from 'react';
import useInterfaceStore from '../../store/store';

//#region CSS

//#region CSS
interface DirectionProps {
	$direction: 'up' | 'down';
	$isHovered?: boolean;
}

const floatUpAnimation = keyframes`
  0% {
    transform: rotate(180deg) translateX(50%) translateY(0);
  }
  50% {
    transform: rotate(180deg) translate(50%) translateY(-10px);
  }
  100% {
    transform: rotate(180deg) translate(50%) translateY(0);
  }
`;


const floatDownAnimation = keyframes`
  0% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
  100% {
    transform: translateX(-50%) translateY(0);
  }
`;

const Chevron = styled.img<DirectionProps>`
	position: absolute;
	width: 24px;
	height: auto;
	${props => props.$direction === 'up' ? 'top: -18px;' : 'bottom:-34px;'};
	transform: ${props => props.$direction === 'up' ? 'rotate(180deg) translateX(50%) ' : 'translateX(-50%)'};
	${props => props.$isHovered && css`
		animation: ${props.$direction === 'up' ? floatUpAnimation : floatDownAnimation} 1.5s ease-in-out infinite;
	`}
`;

export const ButtonContainer = styled.div<DirectionProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 60px;
  ${props => props.$direction === 'up' ? 'top: 20px;' : 'bottom: 20px;'}
  @media (min-height: 1600px) {
	${props => props.$direction === 'up' ? 'top: 20px;' : 'bottom: 70px;'}
	  }


`;

interface ButtonWithIconProps {
	$icon: string | undefined;
}

const ButtonWithIcon = styled.button<ButtonWithIconProps>`
  background-image: url(${props => props.$icon});
  background-size: cover;
  background-color: transparent;
  width: 80px; 
  height: 60px;
  border: none;
  cursor: pointer;
  @media (min-height: 1600px) {
	width: 120px;
	height: 90px;
  }
`;

const Button = styled(ButtonWithIcon)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

//#endregion
interface ChangeSceneButtonProps {
	direction: "up" | "down";
}

const ChangeSceneButton: React.FC<ChangeSceneButtonProps> = ({ direction }) => {
	const { onNext, onPrevious, previousIndex, nextIndex } = useNavigation();
	const {experienceStarted} = useInterfaceStore();
	const chevronImg = "/img/arrow.png";
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [isClicked, setIsClicked] = useState<boolean>(true);

	useEffect(() => {
		if (!experienceStarted) return;
		const returnSetTimeOut = setTimeout(() => {
			setIsClicked(false);
		}, 6000);
		return () => clearTimeout(returnSetTimeOut);

	}, [experienceStarted]);

	//set a TimeOut to change the scene so that the animation can play before the scene changes
	const handleClick = () => {
		if (isClicked) return;
		setIsClicked(true);
		direction === "up" ? onNext() : onPrevious();
		setTimeout(() => {
			setIsClicked(false);
		}, 6000);
	}

	return (
		<>
			<ButtonContainer
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				$direction={direction}>
				<Button $icon={sceneConfig[direction === "up" ? nextIndex : previousIndex]?.buttonImg || ""} onClick={handleClick} >
					<Chevron $direction={direction} $isHovered={isHovered} src={chevronImg} alt="Suivant" />
				</Button>
			</ButtonContainer >
		</>
	);
};

export default ChangeSceneButton;

import styled, { keyframes, css } from 'styled-components';
import { useNavigation } from '../../managers/navigationManager';
import { sceneConfig } from '../../store/sceneConfig';
import { useState } from 'react';

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
  ${props => props.$direction === 'up' ? 'top: 20px;' : 'bottom: 40px;'}
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
	const chevronImg = "/public/img/arrow.png";
	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<>
			<ButtonContainer
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				$direction={direction}>
				<Button  $icon={sceneConfig[direction === "up" ? nextIndex : previousIndex]?.buttonImg || ""} onClick={direction === "up" ? onNext : onPrevious} >
					<Chevron $direction={direction} $isHovered={isHovered} src={chevronImg} alt="Suivant" />
				</Button>
			</ButtonContainer >
		</>
	);
};

export default ChangeSceneButton;

import styled, { keyframes } from 'styled-components';
import { TextConfigScene } from '../store/textConfig';
import ButtonInterface from './interface/ButtonInterface';
import useInterfaceStore from '../store/store';
import SubtitlesManager from './interface/SubtitlesManager';
import ImageIntro from './interface/ImageIntro';
import { useState } from 'react';
import Credit from './interface/Credit';

const fadeInAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const fadeOutAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

interface MainContainerProps {
	$state: string;
}
const MainContainer = styled.div<MainContainerProps>`
	font-family: 'Astonia', sans-serif;
	display: flex;
	flex-direction: column;
	top: 2vh;
	align-items: center;
	justify-content: center;
	z-index: 80;

	height: 100vh; 
	text-align: left; 
	pointer-events: none;
	animation: ${({ $state }) => $state === 'base' ? fadeOutAnimation : fadeInAnimation} 1s forwards;
`;

const MainTitle = styled.h1`
	transform: translateY(50%);
	margin-top: 10px; 
	font-size: min(2.6vw, 50px); 
	color: #c6a283;
	margin-bottom:min(40vh, 400px);
	letter-spacing: 0.1em; 
	
	
	@media (max-height: 700px) {
		margin-bottom:min(40vh, 400px);
		margin-top: 0px;

	}

`;

const TextContainer = styled.div`
	
	bottom: 4vh;
	font-family: 'sincopa', sans-serif;
	max-width: 650px; 
	line-height: 1.1;
	font-size: min(calc(6px + 0.7vw), 20px); 
	z-index: 80;
	@media (max-height: 700px) {
		font-size: min(calc(6px + 0.5vw), 15px); 

	}
`;

const TextDiv = styled.div`
	margin:  min(10px, 1vh) 0; 
	padding: min(10px, 1vh); 
	text-align: justify; 
	color: #ffffff;
	border-radius: 5px; 
`;

const TextDivFinal = styled.div`
	margin: 10px 0; 
	padding: 10px; 
	text-align: justify; 
	font-size: min(calc(4px + 1.3vw), 30px);
	color: #c6a283;
	border-radius: 5px; 
	text-align: center;
`;

const InstructionContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 10px 0; 

`;

const TextDivInstruction = styled.div`
	margin: 10px 0; 
	padding-left: 10px; 
	padding-right: 10px; 
	color: #c6a283;
	text-align: justify; 
	font-family: 'sincopaElla', sans-serif;
	border-radius: 5px; 
`;

const LogoImg = styled.img`
	margin-left: 8px;
	bottom: 0;
	transform: translateY(-3px);
	left: 0;
	width: min(5vw, 8%);
	height: auto;
	z-index: 80;
	user-select: none;
`;

const NoSelect = styled.div`
	-webkit-touch-callout: none; 
	-webkit-user-select: none; 
	-khtml-user-select: none; 
	-moz-user-select: none; 
	-ms-user-select: none; 
	user-select: none; 
	
`;


const Overlay = styled.div<{ $isVisible: boolean }>`
  animation: ${({ $isVisible }) => ($isVisible ? fadeInAnimation : fadeOutAnimation)} 0.5s ease forwards; 
`;

const MainInterface: React.FC = () => {
	const { state } = useInterfaceStore();
	const [isCreditOpen, setIsCreditOpen] = useState<boolean>(false);

	return (
		<NoSelect>
			{!isCreditOpen && <ButtonInterface />}
			<SubtitlesManager />
			<Credit isVisible={isCreditOpen} onClose={(state: boolean) => setIsCreditOpen(state)} />
			<ImageIntro />
			<MainContainer $state={state}>
				<MainTitle dangerouslySetInnerHTML={{ __html: TextConfigScene.title }} />
				<Overlay $isVisible={isCreditOpen} >
					<TextContainer>
						<TextDiv>{TextConfigScene.context}</TextDiv>
						<TextDivInstruction>{TextConfigScene.explication}</TextDivInstruction>
						<InstructionContainer>
							<TextDiv dangerouslySetInnerHTML={{ __html: TextConfigScene.soundInfo }} />
							<LogoImg src="/img/headphone.svg" alt="logo" />
						</InstructionContainer>
						<TextDivFinal>Commencez l'expérience en cliquant sur l'écran.</TextDivFinal>
					</TextContainer>
				</Overlay>
			</MainContainer>
		</NoSelect >
	);
};

export default MainInterface;

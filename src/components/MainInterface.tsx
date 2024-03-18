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
	//justify content in the middle of the page
	justify-content: center;
	/* justify-content: center; */
	height: 100vh; /* Use full viewport height */
	text-align: left; /* Center text for all children */
	pointer-events: none;
	animation: ${({ $state }) => $state === 'base' ? fadeOutAnimation : fadeInAnimation} 1s forwards;
`;

const MainTitle = styled.h1`
	margin-top: 10px; /* Margin top */
	font-size: min(2.6vw, 50px); /* Responsive font size */
	color: #c6a283;/* Customize color */
	margin-bottom:min(40vh, 400px);
	letter-spacing: 0.1em; /* Add some letter spacing */
	
	/* responsive font size */
	@media (max-height: 700px) {
		margin-bottom:min(40vh, 400px);
		margin-top: 0px;

	}

`;

const TextContainer = styled.div`
	/* position: absolute; */
	bottom: 4vh;
	font-family: 'sincopa', sans-serif;
	max-width: 650px; /* Maximum width of text container */
	line-height: 1.1;
	font-size: min(calc(6px + 0.7vw), 20px); /* Smaller font size */
	z-index: 80;
	@media (max-height: 700px) {
		font-size: min(calc(6px + 0.5vw), 15px); /* Smaller font size */


	}
`;

const TextDiv = styled.div`
	margin:  min(10px, 1vh) 0; /* Margin top and bottom */
	padding: min(10px, 1vh); /* Padding inside the divs */
	text-align: justify; /* Justify text */
	color: #ffffff;
	border-radius: 5px; /* Rounded corners for the divs */
`;

const TextDivFinal = styled.div`
	margin: 10px 0; /* Margin top and bottom */
	padding: 10px; /* Padding inside the divs */
	text-align: justify; /* Justify text */
	font-size: min(calc(4px + 1.3vw), 30px);
	color: #c6a283;
	border-radius: 5px; /* Rounded corners for the divs */
	text-align: center;
`;

const InstructionContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 10px 0; /* Margin top and bottom */

`;

const TextDivInstruction = styled.div`
	margin: 10px 0; /* Margin top and bottom */
	padding-left: 10px; /* Padding inside the divs */
	padding-right: 10px; /* Padding inside the divs */
	color: #c6a283;
	text-align: justify; /* Justify text */
	font-family: 'sincopaElla', sans-serif;
	border-radius: 5px; /* Rounded corners for the divs */
`;

const LogoImg = styled.img`
	margin-left: 10px;
	bottom: 0;
	left: 0;
	width:8%;
	height: auto;
	z-index: 80;
	user-select: none;
`;

const NoSelect  = styled.div`
	-webkit-touch-callout: none; 
	-webkit-user-select: none; 
	-khtml-user-select: none; 
	-moz-user-select: none; 
	-ms-user-select: none; 
	user-select: none; 
`;

const MainInterface: React.FC = () => {
	const { state } = useInterfaceStore();
	const [isCreditOpen, setIsCreditOpen] = useState<boolean>(false);

	return (
		<NoSelect>
			<ButtonInterface />
			<SubtitlesManager />
			<Credit isVisible={isCreditOpen} onClose={(state:boolean) => setIsCreditOpen(state)} />
			<MainContainer $state={state}>
				<ImageIntro />
				<MainTitle dangerouslySetInnerHTML={{ __html: TextConfigScene.title }} />
				<TextContainer>
					<TextDiv>{TextConfigScene.context}</TextDiv>
					<TextDivInstruction>{TextConfigScene.explication}</TextDivInstruction>
					<InstructionContainer>
						<TextDiv dangerouslySetInnerHTML={{ __html: TextConfigScene.soundInfo }} />
						<LogoImg src="/img/headphone.svg" alt="logo" />
					</InstructionContainer>
					<TextDivFinal>Commencez l'expérience en cliquant sur l'écran.</TextDivFinal>
				</TextContainer>
			</MainContainer>
		</NoSelect>
	);
};

export default MainInterface;

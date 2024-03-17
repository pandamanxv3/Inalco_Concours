import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TextConfig } from '../store/textConfig';
import { useNavigation } from '../managers/useNavigation';
import ButtonInterface from './interface/ButtonInterface';
import useInterfaceStore from '../store/store';
import SubtitlesManager from './interface/SubtitlesManager';
import ImageIntro from './interface/ImageIntro';

const fadeInOutAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const fadeInAnimation = keyframes`
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
	animation: ${({ $state }) => $state === 'base' ? fadeInAnimation : fadeInOutAnimation} 1s forwards;
`;

const MainTitle = styled.h1`

	font-size: min(2.6vw, 50px); /* Responsive font size */
	color: #c6a283;/* Customize color */
	margin-bottom:min(40vh, 400px);
	letter-spacing: 0.1em; /* Add some letter spacing */

`;

const TextContainer = styled.div`
	/* position: absolute; */
	bottom: 4vh;
	font-family: 'sincopa', sans-serif;
	max-width: 650px; /* Maximum width of text container */
	line-height: 1.1;
	font-size: min(1vw, 20px); /* Smaller font size */
	z-index: 80;
`;

const TextDiv = styled.div`
	margin: 10px 0; /* Margin top and bottom */
	padding: 10px; /* Padding inside the divs */
	text-align: justify; /* Justify text */
	color: #ffffff;
	border-radius: 5px; /* Rounded corners for the divs */
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

const MainInterface: React.FC = () => {
	const { currentLanguageIndex } = useNavigation();
	const { state } = useInterfaceStore();
	return (
		<>
			<ButtonInterface />
			<SubtitlesManager />
			<MainContainer $state={state}>
				<ImageIntro />
				<MainTitle dangerouslySetInnerHTML={{ __html: TextConfig[currentLanguageIndex].title }} />
				<TextContainer>
					<TextDiv>{TextConfig[currentLanguageIndex].context}</TextDiv>
					<TextDivInstruction>{TextConfig[currentLanguageIndex].explication}</TextDivInstruction>
					<InstructionContainer>
						<TextDiv>{TextConfig[currentLanguageIndex].soundInfo}</TextDiv>
						<LogoImg src="/img/headphone.svg" alt="logo" />
					</InstructionContainer>
					{/* Ajouter plus de TextDiv selon les besoins */}
				</TextContainer>
			</MainContainer>
		</>
	);
};

export default MainInterface;

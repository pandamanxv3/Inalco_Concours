import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TextConfig } from '../store/textConfig';
import { useNavigation } from '../managers/useNavigation';
import ButtonInterface from './interface/ButtonInterface';
import useInterfaceStore from '../store/store';


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
	align-items: center;
	justify-content: center;
	
	height: 100vh; /* Use full viewport height */
	padding: 20px; /* Add some padding */
	text-align: left; /* Center text for all children */
	pointer-events: none;
	animation: ${({ $state }) => $state === 'base' ? fadeInAnimation : fadeInOutAnimation} 1s forwards;
`;

const MainTitle = styled.h1`
	font-size: 2em; /* Larger font size */
	color: #ffffff; /* Customize color */
	margin-bottom:40vh; /* Space below the title */
	letter-spacing: 0.1em; /* Add some letter spacing */

`;

const TextContainer = styled.div`
	font-family: 'gilda', sans-serif;
	max-width: 650px; /* Maximum width of text container */
	line-height: 1.1;
	font-size: 0.9em; /* Larger font size */
`;

const TextDiv = styled.div`
	margin: 10px 0; /* Margin top and bottom */
	padding: 10px; /* Padding inside the divs */
	text-align: justify; /* Justify text */
	color: #ffffff;
	border-radius: 5px; /* Rounded corners for the divs */
`;

const TextDivInstruction = styled.div`
	font-weight: bold; /* Bold text */
	margin: 10px 0; /* Margin top and bottom */
	padding-left: 10px; /* Padding inside the divs */
	padding-right: 10px; /* Padding inside the divs */
	color: #e6b081;
	border-radius: 5px; /* Rounded corners for the divs */
`;

const MainInterface: React.FC = () => {
	const {currentLanguageIndex} = useNavigation();
	const {state} = useInterfaceStore();
	return (
		<>
		<ButtonInterface />
		<MainContainer $state={state}>
			<MainTitle dangerouslySetInnerHTML={{ __html: TextConfig[currentLanguageIndex].title }}></MainTitle>
			<TextContainer>
				<TextDiv>{TextConfig[currentLanguageIndex].context}</TextDiv>
				<TextDivInstruction>{TextConfig[currentLanguageIndex].explication}</TextDivInstruction>
				<TextDiv>{TextConfig[currentLanguageIndex].soundInfo}</TextDiv>
				{/* Ajouter plus de TextDiv selon les besoins */}
			</TextContainer>
		</MainContainer>
		</>
	);
};

export default MainInterface;

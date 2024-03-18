import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;



const Overlay = styled.div<{ $isVisible: boolean, $shouldAnimate: boolean }>`
 position: fixed; 
  top: 75%;
  left:  50%;
  width: min(60vw, 620px); 
  height: min(40vh, 500px); 
  transform: translate(-50%, -50%);
  border-radius: 10px;
  opacity: 0;
  animation: ${({ $isVisible, $shouldAnimate }) =>
		$shouldAnimate ? ($isVisible ? fadeIn : fadeOut) : 'none'} 0.5s ease forwards;
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'all' : 'none')}; 
  z-index: 1000; 
`;

const Content = styled.div`
	top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OpenButton = styled.div` 
  position: absolute;
  bottom: 14px;
  right: 12px;
  z-index: 1000;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: 'sincopaElla', sans-serif;
  color: white;
  font-size:min(1.5vw, 1.2em);
  cursor: pointer;

  &:hover {
	color: #c6a283;
  }
`;

const Title = styled.div`
	font-family: 'Astonia', sans-serif;
	font-size: min(2.3vw, 35px);
	text-align: center;
	width: 100%;
	transform: translateX(-50%);
	left: 50%;
	position: absolute;
	top: 10px;
  color: #ffffff;
  border-radius: 5px;
`;

const Title2 = styled.div`
	font-family: 'sincopa', sans-serif;
	margin-top: 6vh; 
	padding-top: 10px; 
	text-align: justify; 
	font-size: min(2vw, 30px);
	color: #c6a283;
	border-radius: 5px; 
	text-align: center;
`;

const CollaborateurName = styled.p`
	font-family: 'sincopa', sans-serif;
	text-align: justify; 
	font-size: min(1.4vw, 20px);
	color: #ffffff;
	border-radius: 5px; 
	text-align: center;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;	
  align-items: center;
  margin-top: 20px;
	gap: 20px;
  @media (max-height: 600px) {
	margin-top: 5px;
	

  }
`;
const ImgConcours = styled.img`
  width: 25%;
  height: 25%;

  @media (max-width: 600px) {
	width: 20%;
	height:  20%;
  }
  @media (max-height: 600px) {
	width: 20%;
	height:  20%;
  }
`;
const Img42 = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 600px) {
	width: 80px;
	height:  80px;
  }
`;
interface CreditProps {
	isVisible: boolean;
	onClose: (state: boolean) => void;
}

const Credit: React.FC<CreditProps> = ({ isVisible, onClose }) => {
	const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);


	const handleClick = () => {
		if (!shouldAnimate) setShouldAnimate(true);
		onClose(!isVisible);
	}

	return (
		<>
			<OpenButton onClick={handleClick} >{isVisible ? "↼ Revenir à l'expérience" : "Accéder aux crédits ⇀"}</OpenButton>
			<Overlay $isVisible={isVisible} $shouldAnimate={shouldAnimate}>
				<Title>par Adnan Boudjelal</Title>
				<Content>
					<Title2>Collaborateur</Title2>
					<CollaborateurName>Voix française - Ilona</CollaborateurName>
					<CollaborateurName>Voix coréenne - Yunjin</CollaborateurName>
					<CollaborateurName>Voix arabe - Amina</CollaborateurName>
					<CollaborateurName>Dessin de couverture - Colombe</CollaborateurName>
					<ImgContainer>
						<ImgConcours src="/img/concoursIcon.svg" alt="concours" />
						<Img42 src="/img/42Icon.png" alt="logo" />
					</ImgContainer>
				</Content>
			</Overlay>
		</>
	);
};

export default Credit;
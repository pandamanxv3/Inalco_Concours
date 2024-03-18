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

const Overlay = styled.div<{ $isVisible: boolean }>`
 position: fixed; /* Modifier pour fixed pour s'assurer qu'il couvre toute la page */
  top: 50%;
  left:  50%;
  width: 400px;

  height: 400px;
  transform: translate(-50%, -50%);
  background: #333231;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : fadeOut)} 0.5s ease forwards; /* Ajout de forwards pour garder l'état final de l'animation */
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'all' : 'none')}; /* Permet de cliquer à travers quand il n'est pas visible */
  z-index: 1000; /* Assurez-vous que c'est assez haut pour s'afficher au-dessus des autres éléments */
`;

const Content = styled.div`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.div`
 position: absolute;
 bottom: 10px;
  font-family: 'sincopaElla', sans-serif;
 color: #ffffff;
  cursor: pointer;
`;

const OpenButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: 'sincopaElla', sans-serif;
  color: white;
  font-size:1em;
  cursor: pointer;

  &:hover {
	color: #c6a283;
  }
`;

const TextDiv = styled.div`
  margin: 10px 0;
  padding: 10px;
  text-align: justify;
  color: #ffffff;
  border-radius: 5px;
`;

interface CreditProps {
	isVisible: boolean;
	onClose: (state: boolean) => void;
}
const Credit: React.FC<CreditProps> = ({ isVisible, onClose }) => {
	const handleClose = () => {
		onClose(false);
	}
	const handleOpen = () => {
		onClose(true);
	}

	return (
		<>
			<OpenButton onClick={handleOpen}>Crédits</OpenButton>
			<Overlay $isVisible={isVisible}>
				<Content>
					
					<TextDiv>Ce projet a été réalisé par...</TextDiv>
					<img src="chemin-vers-votre-image.jpg" alt="Crédits" />
					<CloseButton onClick={handleClose}>Fermer</CloseButton>
				</Content>
			</Overlay>
		</>
	);
};

export default Credit;
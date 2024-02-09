// MainInterface.tsx
import React from 'react';
import useInterfaceStore from '../store/store';
import styled from 'styled-components';
import { useNavigation } from '../managers/navigationManager';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: #e29640;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
`;

const MainInterface: React.FC = () => {
	const { setState, state } = useInterfaceStore();
	const { onNext, onPrevious } = useNavigation();

	return (
		<div>
			<Title>{state === 'base' ? 'hello world' : state}</Title>
			{state === 'base' ?
				<button onClick={() => setState('DZ')}>GO</button>
				:
				<>
					<button onClick={() => setState('base')}>Retour</button>
					<button onClick={onPrevious}>Précédent</button>
					<button onClick={onNext}>Suivant</button>
				</>
			}
		</div>
	);
};

export default MainInterface;

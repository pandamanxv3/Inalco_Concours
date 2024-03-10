// MainInterface.tsx
import React from 'react';
import useInterfaceStore from '../store/store';
import styled from 'styled-components';
import ButtonInterface from './interface/ButtonInterface';

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
	const {  state } = useInterfaceStore();
	return (
		<div>
			<Title>{state === 'base' ? 'hello world' : state}</Title>
		<ButtonInterface />
		</div>
	);
};

export default MainInterface;

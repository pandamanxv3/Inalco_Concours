import styled from "styled-components";

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: #e29640;
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2;
`;

function MainInterface() {
	return (
		<>
			<Title>hello world</Title>
		</>
	);
}

export default MainInterface;
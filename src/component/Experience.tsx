import {  Box, Plane } from '@react-three/drei';

function Experience() {
	return (
		<>
			<ambientLight intensity={0} />
			<spotLight castShadow intensity={1000} position={[10, 10, 7]} angle={0.15} penumbra={1} />

			<Box position={[0, 0, 0]} castShadow >
				<meshStandardMaterial attach="material" color="#e38b8b" />
			</Box>

			<Plane position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[300, 100, 1]} receiveShadow  >
				<meshStandardMaterial attach="material" color="#658072" />
			</Plane>
		</>
	);
}

export default Experience;

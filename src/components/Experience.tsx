import { Box, MeshTransmissionMaterial, Plane, useFBO } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { Model } from '../3dExport/Model';

function Experience() {

	const { camera } = useThree();
	useEffect(() => {
		camera.rotation.set(-1.57, -1.31433, -1.57172);
	}, [camera]);
	return (
		<>
			<ambientLight intensity={2.5} />
			
			<Model />
			<Plane position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[300, 100, 1]} receiveShadow  >
				<meshStandardMaterial attach="material" color="#658072" />
			</Plane>
		</>
	);
}

export default Experience;

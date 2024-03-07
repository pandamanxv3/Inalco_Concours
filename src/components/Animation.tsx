import { Box, MeshTransmissionMaterial, Plane, useFBO } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { Model } from '../3dExport/Model';

function Animation() {

	const { camera } = useThree();

	useFrame(() => {
		// camera.rotation.set(-1.57, -1.31433, -1.57172);
	});
	return (
		<>
		</>
	);
}

export default Animation;

import { Canvas, useThree } from '@react-three/fiber';
import Experience from './Experience';
import { Box, OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';
import { useEffect } from 'react';

function Scene3D() {

	// const { camera } = useThree();

	// useEffect(() => {
	//   camera.lookAt(0, 0, 0);
	// }, [camera]);

	return (
		<Canvas
			shadows
			camera={{ position: [-30, 29, 42] }}
			style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, backgroundColor: '#eac68f' }}>
			<Experience />
			{/* <OrbitControls /> */}
		</Canvas >
	);
}

export default Scene3D;

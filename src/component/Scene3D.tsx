import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { OrbitControls } from '@react-three/drei';

function Scene3D() {
	return (

		<Canvas
			shadows
			camera={{ position: [-1, 2, 5] }}
			style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
			<Experience />
			<OrbitControls />
		</Canvas >
	);
}

export default Scene3D;

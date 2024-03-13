import { useFrame } from '@react-three/fiber';
import BackgroundAnimation from './BackgroundAnimation';

function Animation() {

	// const { camera } = useThree();

	useFrame(() => {
		// camera.rotation.set(-1.57, -1.31433, -1.57172);
	});
	return (
		<>
		<BackgroundAnimation />
		</>
	);
}

export default Animation;

import { Canvas } from '@react-three/fiber';
import Experience from './3D/Experience';
// import { Environment } from '@react-three/drei';
import PostProcessing from './3D/PostProcessing';
import { Environment } from '@react-three/drei';

function Scene3D() {


	return (
		<Canvas
			gl={{ antialias: false }} flat
			shadows
			style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, backgroundColor: '#282828' }}>
			<Environment files="/public/hdri/gradient_min_19.hdr" />
			<Experience />
			<ambientLight intensity={5} />
			<PostProcessing />
			{/* <OrbitControls /> */}
		</Canvas >
	);
}

export default Scene3D;

import { Canvas } from '@react-three/fiber';
import Experience from './3D/Experience';
import { AccumulativeShadows, Environment, RandomizedLight } from '@react-three/drei';
import PostProcessing from './3D/PostProcessing';

function Scene3D() {


	return (
		<Canvas
			gl={{ antialias: false }} flat
			shadows
			style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, backgroundColor: '#000000' }}>
			<Environment files="/public/hdri/gradient_min_19.hdr" />
			<Experience />
			<ambientLight intensity={2} />
			<PostProcessing />
			<AccumulativeShadows receiveShadow temporal frames={100} opacity={0.8} alphaTest={0.9} scale={12} position={[0, -0.5, 0]}>
				<RandomizedLight radius={4} ambient={0.5} position={[5, 8, -10]} bias={0.001} />
			</AccumulativeShadows>
			{/* <OrbitControls /> */}
		</Canvas >
	);
}

export default Scene3D;

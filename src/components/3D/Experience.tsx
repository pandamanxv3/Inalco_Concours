import { Plane } from '@react-three/drei';
import { Model } from '../../3dExport/Model';
import Camera from './Camera';
import Animation from './Animation';

function Experience() {


	return (
		<>
			<Camera />
			<ambientLight intensity={.5} />
			<Model />
			<Animation />
			<Plane position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[300, 1000, 1]} receiveShadow  >
				<meshStandardMaterial attach="material" color="#658072" />
			</Plane>
		</>
	);
}

export default Experience;
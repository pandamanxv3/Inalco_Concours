// import { Plane } from '@react-three/drei';
import { Model } from '../../3dExport/Model';
import Camera from './Camera';
import Animation from './Animation';
import { useThree } from '@react-three/fiber';
import Screen from './Screen';

function Experience() {
	const {} = useThree();

	return (
		<>
			<Camera />
			<ambientLight intensity={.5} />
			<Model />
			<Screen />
			<Animation />
		</>
	);
}

export default Experience;

import { Box, MeshTransmissionMaterial, Plane, useFBO } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Model } from '../3dExport/Model';

function Experience() {
	const buffer = useFBO();
	const refCube = useRef<THREE.Mesh>(null);
	const [state, setState] = useState<number>(0);
	// useFrame((state) => {
	// 	setState(state.clock.getElapsedTime() / 5 % 1);
	// 	refCube.current!.rotation.x += 0.01;
	// 	refCube.current!.rotation.y += 0.01;
	// 	if (refCube.current)
	// 		refCube.current.visible = true;
	// 	state.gl.setRenderTarget(buffer);
	// 	state.gl.render(state.scene, state.camera);
	// 	state.gl.setRenderTarget(null);
	// 	if (refCube.current)
	// 		refCube.current.visible = false;
	// });

	return (
		<>
			<ambientLight intensity={3} />
			<spotLight castShadow intensity={1000} position={[10, 10, 7]} angle={0.15} penumbra={1} />
			<Box ref={refCube} position={[0, 0, 10]} >
				<meshBasicMaterial attach="material" color="#e29640" />
			</Box>
			<Model />
			<Box position={[0, 0, 0]} >
				<MeshTransmissionMaterial
					transmission={1}
					roughness={state}
					thickness={state}
					color={"#ffffff"}
					buffer={buffer.texture}
					distortion={0}
					distortionScale={0.5}
					temporalDistortion={0.0}
				/>
			</Box>
			<Plane position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[300, 100, 1]} receiveShadow  >
				<meshStandardMaterial attach="material" color="#658072" />
			</Plane>
		</>
	);
}

export default Experience;

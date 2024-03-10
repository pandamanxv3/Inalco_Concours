import { RoundedBox, useFBO, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMeshState } from '../../store/ContextBoard';
import { useRef } from 'react';
import { Mesh } from "three";

function BackgroundAnimation() {
	const buffer = useFBO();
	const { Env } = useMeshState().meshRefs;

	const glassref = useRef<Mesh>(null);

	useFrame((state) => {
		if (Env.current) Env.current.visible = true;
		if (glassref.current) glassref.current.visible = false;
		state.gl.setRenderTarget(buffer);
		state.gl.render(state.scene, state.camera);
		state.gl.setRenderTarget(null);
		if (Env.current) Env.current.visible = false;
		if (glassref.current) glassref.current.visible = true;
	});

	return (
		<>
			<RoundedBox
				ref={glassref}
				rotation={[0, Math.PI / 2, 0]}
				position={[50, 30, 40]}
				args={[80, 37, 5]}
				radius={1}
			>
				<MeshTransmissionMaterial
					transmission={0.95}
					roughness={1}
					thickness={0.3}
					color={"#c1a8a8"}
					distortionScale={0}
					temporalDistortion={0}
					buffer={buffer.texture}
				/>
			</RoundedBox>
		</>
	);
}

export default BackgroundAnimation;

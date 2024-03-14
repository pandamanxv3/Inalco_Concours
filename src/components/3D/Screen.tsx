import { RoundedBox, useFBO, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMeshState } from '../../store/ContextBoard';
import { initialConfig } from '../../store/initialConfig';

function Screen() {
	const buffer = useFBO();
	const {initialScaleScreen} = initialConfig;
	const { EnvRef: Env, screenRef } = useMeshState().meshRefs;

	useFrame((state) => {
		if (!Env.current) return
		if (Env.current) Env.current.visible = true;
		if (screenRef.current) screenRef.current.visible = false;
		state.gl.setRenderTarget(buffer);
		state.gl.render(state.scene, state.camera);
		state.gl.setRenderTarget(null);
		if (Env.current) Env.current.visible = false;
		if (screenRef.current) screenRef.current.visible = true;
	});

	return (
		<>
			<group rotation={[0,0,-0.1]}>
				<RoundedBox
					ref={screenRef}
					position={[60, 28, 40]}

					rotation={[0, Math.PI * 0.5, 0]}
					args={[80, 37, 5]}
					scale={[initialScaleScreen, initialScaleScreen, initialScaleScreen]}
					radius={1}
				>
					<MeshTransmissionMaterial
						transmission={0.95}
						roughness={0.1}
						thickness={0.3}
						color={"#c1a8a8"}
						distortionScale={0}
						temporalDistortion={0}
						buffer={buffer.texture}
					/>
				</RoundedBox>
		</group >
			</>
	);
}

export default Screen;

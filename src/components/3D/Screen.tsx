import { RoundedBox, useFBO, MeshTransmissionMaterial, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMeshState } from '../../store/ContextBoard';
import { initialConfig } from '../../store/initialConfig';
import { MeshPhysicalMaterial } from "three";
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import useInterfaceStore from '../../store/store';

function Screen() {
	const buffer = useFBO();
	const [isInitialAnimationFinish, setInitialAnimationFinish] = useState<boolean>(false);
	const [isNormalSize, setIsNormalSize] = useState<boolean>(false);
	const [firstChange, setFirstChange] = useState<boolean>(false);
	const [currentIndex, setCurrentIndex] = useState<number>(1);
	const { experienceStarted, state } = useInterfaceStore.getState();
	const { initialScaleScreen, initialScreenXRotation: initialScreenRotation } = initialConfig;
	const { EnvRef: Env, screenRef, DzEnv, FrEnv, KrEnv } = useMeshState().meshRefs;
	const envsTab = [DzEnv, FrEnv, KrEnv];

	const makeAllEnvsInvisible = () => {
		envsTab.forEach(env => {
			if (env.current) env.current.visible = false;
		});
	}

	useEffect(() => {

		if (experienceStarted) {
			console.log('experienceStarted', experienceStarted);
			makeAllEnvsInvisible();
			FrEnv.current!.visible = true;
			gsap.to(screenRef.current!.scale, {
				duration: 1,
				x: initialScaleScreen,
				y: initialScaleScreen,
				z: initialScaleScreen,
				ease: "power3.inOut",
			});
			gsap.to(screenRef.current!.rotation, {
				duration: 1.5,
				x: initialScreenRotation[0],
				y: initialScreenRotation[1],
				z: initialScreenRotation[2],
				ease: "power3.inOut",
			});

			const material = screenRef.current!.material;
			if (material instanceof MeshPhysicalMaterial) {
				console.log('material', material);
				gsap.to(material, {
					thickness: 0.3,
					duration: 1,
					ease: "power3.inOut",
					onComplete: () => {
						
					}
				});
			}
		}
	}, [experienceStarted]);
	useFrame((state, deltaTime: number) => {
		if (!Env.current) return
		if (Env.current) Env.current.visible = true;
		if (screenRef.current) screenRef.current.visible = false;
		state.gl.setRenderTarget(buffer);
		state.gl.render(state.scene, state.camera);
		state.gl.setRenderTarget(null);
		if (Env.current) Env.current.visible = false;
		if (screenRef.current) screenRef.current.visible = true;

		if (!isInitialAnimationFinish && screenRef.current) {
			gsap.to(screenRef.current.scale, {
				duration: 3,
				x: initialScaleScreen * 0.6,
				y: initialScaleScreen * 0.6,
				z: initialScaleScreen * 0.6,
				ease: "power3.inOut",
				onComplete: () => {
					setIsNormalSize(true);
				}

			});
			setInitialAnimationFinish(true);
		}

		if (screenRef.current && !experienceStarted && isNormalSize) {
			if (screenRef.current) {
				screenRef.current.rotation.y = (screenRef.current.rotation.y + deltaTime) % (Math.PI);
				if ((screenRef.current.rotation.y > 0.2 && screenRef.current.rotation.y < Math.PI - 0.2) && !firstChange) {
					setFirstChange(true);
				} else if ((screenRef.current.rotation.y < 0.2 || screenRef.current.rotation.y > Math.PI - 0.05) && firstChange) {
					setFirstChange(false);
					makeAllEnvsInvisible();
					envsTab[currentIndex].current!.visible = true;
					setCurrentIndex((currentIndex + 1) % 3);
				}
			}
		}
	});

	return (
		<>
			<group rotation={[0, 0, -0.1]}>
				<RoundedBox
					ref={screenRef}
					position={[60, 28, 40]}

					rotation={[0, Math.PI * 0.5, 0]}
					args={[80, 37, 5]}
					scale={[0, 0, 0]}
					radius={1}
				>
					<MeshTransmissionMaterial
						transmission={0.95}
						roughness={0.1}
						thickness={100}
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

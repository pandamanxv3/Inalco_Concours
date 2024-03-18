// import { Canvas } from '@react-three/fiber'
// import { AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF, useVideoTexture } from '@react-three/drei'
// import { EffectComposer, Bloom, HueSaturation, BrightnessContrast, TiltShift2, WaterEffect, ToneMapping, Noise, DepthOfField } from '@react-three/postprocessing'
import { useEnvironment } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

function Postpro() {

	const { scene } = useThree();
	const envMap = useEnvironment({ files: "/hdri/gradient_min_19.hdr" });

	useEffect(() => {
		scene.environment = envMap;
	}, []);
	
	return (
		<></>
	)
}

export default Postpro;
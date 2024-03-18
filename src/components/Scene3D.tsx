// Scene3D.js
import { Canvas, useThree } from '@react-three/fiber';
import Experience from './3D/Experience';
import PostProcessing from './3D/PostProcessing';
import useInterfaceStore from '../store/store'; // Mettez à jour le chemin selon votre structure
import {  useSpring } from '@react-spring/core';

function BackgroundColorAnimator() {
	const { gl } = useThree();
	const { state } = useInterfaceStore();
	const colors = {
		base: '#282828',
		KR: '#483e4e', // Exemple de couleur, ajustez selon vos besoins
		FR: '#475159',
		DZ: '#a4896dc7',
	};

	useSpring({
		to: { color: colors[state] },
		onChange: (params: { value: any }) => {
			gl.setClearColor(params.value.color);
		},
		config: { duration: 2000 } // Ou utilisez une configuration prédéfinie comme 'molasses'
	  });

	return <></>;
}

function Scene3D() {
	return (
		<Canvas
			gl={{ antialias: false }} flat
			shadows
			style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, backgroundColor: '#282828' }}>
			<Experience />
			<BackgroundColorAnimator />
			<ambientLight intensity={3} />
			<PostProcessing />
		</Canvas>
	);
}

export default Scene3D;

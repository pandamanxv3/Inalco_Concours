import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		MaroccoScene: THREE.Mesh
		ParisScene: THREE.Mesh
		SeolScene: THREE.Mesh
		AminaMesh: THREE.SkinnedMesh
		YunjinMesh: THREE.SkinnedMesh
		iloMesh: THREE.SkinnedMesh
		pumaMesh: THREE.SkinnedMesh
		snakeMesh: THREE.SkinnedMesh
		birdMesh: THREE.SkinnedMesh
		mixamorigHips: THREE.Bone
		mixamorigHips_1: THREE.Bone
		mixamorigHips_2: THREE.Bone
		_rootJoint: THREE.Bone
		ROOT: THREE.Bone
		Bone: THREE.Bone
	}
	materials: {
		MainMaterial: THREE.MeshStandardMaterial
	}
	animations: GLTFAction[]
}

type ActionName = 'MaroccoCharAnim' | 'SeolCharAnim' | 'ParisCharAnim' | 'walk' | 'slide' | 'fly';
interface GLTFAction extends THREE.AnimationClip {
	name: ActionName;
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh'] | JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>

export function Model(props: JSX.IntrinsicElements['group']) {
	const group = useRef<THREE.Group>(null);
	const { nodes, materials, animations } = useGLTF('/3d/SCENE-transformed.glb') as GLTFResult
	const { actions } = useAnimations(animations, group);
	useEffect(() => {
		actions.MaroccoCharAnim!.play();
		actions.SeolCharAnim!.play();
		actions.ParisCharAnim!.play();
		actions.walk!.play();
		actions.slide!.play();
		actions.fly!.play();
	})
	console.log(actions);
	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				<mesh name="MaroccoScene" geometry={nodes.MaroccoScene.geometry} material={materials.MainMaterial} position={[14.462, 4.538, 104.857]} rotation={[-Math.PI, 0, -Math.PI]} scale={[18.138, 2.034, 5.606]} />
				<mesh name="ParisScene" geometry={nodes.ParisScene.geometry} material={materials.MainMaterial} position={[52.472, -16.851, 110.713]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.085} />
				<mesh name="SeolScene" geometry={nodes.SeolScene.geometry} material={materials.MainMaterial} position={[59.341, -37.629, 157.743]} rotation={[-2.531, -1.38, -2.676]} scale={8.039} />

				<group name="MaroccoChar" position={[0, 0, -11.153]} rotation={[Math.PI / 2, 0, 0]} scale={7.404}>
					<primitive object={nodes.mixamorigHips} />
				</group>
				<skinnedMesh
					name="AminaMesh"
					geometry={nodes.AminaMesh.geometry}
					material={materials.MainMaterial}
					skeleton={nodes.AminaMesh.skeleton}
					position={[0, 0, -11.153]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={7.404} />

				<group name="SeolChar" position={[0, 0, 10.026]} rotation={[Math.PI / 2, 0, 0]} scale={7.404}>
					<primitive object={nodes.mixamorigHips_1} />
				</group>
				<skinnedMesh
					name="YunjinMesh"
					geometry={nodes.YunjinMesh.geometry}
					material={materials.MainMaterial}
					skeleton={nodes.YunjinMesh.skeleton}
					position={[0, 0, 10.026]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={7.404} />

				<group name="ParisChar" position={[0, 0, 1.123]} rotation={[Math.PI / 2, 0, 0]} scale={7.404}>
					<primitive object={nodes.mixamorigHips_2} />
				</group>
				<skinnedMesh
					name="iloMesh"
					geometry={nodes.iloMesh.geometry}
					material={materials.MainMaterial}
					skeleton={nodes.iloMesh.skeleton}
					position={[0, 0, 1.123]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={7.404} />

				<group name="Puma" scale={0.192}>
					<primitive object={nodes._rootJoint} />
				</group>
				<skinnedMesh
					name="pumaMesh"
					geometry={nodes.pumaMesh.geometry}
					material={materials.MainMaterial}
					skeleton={nodes.pumaMesh.skeleton} scale={0.192} />

				<group name="snake" scale={4.083} rotation={[0, 0, 0]}>
					<primitive object={nodes.ROOT} />
				</group>
				<skinnedMesh
					name="snakeMesh"
					geometry={nodes.snakeMesh.geometry}
					material={materials.MainMaterial}
					skeleton={nodes.snakeMesh.skeleton} 
					scale={4.083} />

				<group name="Bird" rotation={[Math.PI / 2, 0, 0]}>
					<primitive object={nodes.Bone} />
				</group>
				<skinnedMesh
					name="birdMesh"
					geometry={nodes.birdMesh.geometry}
					material={materials.MainMaterial}
					skeleton={nodes.birdMesh.skeleton}
					rotation={[Math.PI / 2, 0, 0]} />
			</group>
		</group>
	)
}

useGLTF.preload('/SCENE-transformed.glb')

import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useMeshState } from '../store/ContextBoard'
import useInterfaceStore from '../store/store'
import { useFrame } from '@react-three/fiber'
import { initialConfig } from '../store/initialConfig'

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

export function Model(props: JSX.IntrinsicElements['group']) {
	const group = useRef<THREE.Group>(null);
	const { nodes, materials, animations } = useGLTF('/3d/SCENE-transformed.glb') as GLTFResult;
	const { actions } = useAnimations(animations, group);
	
	const {state} = useInterfaceStore();
	const { EnvRef: Env, KrEnv, DzEnv, FrEnv, CharRef: Char, KrChar, DzChar, FrChar, AnimalRef: Animal, KrAnimal, DzAnimal, FrAnimal } = useMeshState().meshRefs;
	const {intialAnimalPosition, initialCharacterPosition, initialEnvPosition} = initialConfig;
	
	useEffect(() => {
		actions.MaroccoCharAnim!.play();
		actions.SeolCharAnim!.play();
		actions.ParisCharAnim!.play();
		actions.walk!.play();
		actions.slide!.play();
		actions.fly!.play();
	})
	useFrame(( ) => { // initial position  = [1, 10,8]
		const max: number =-400;
		if (state !== "base") {
			//avancer ici
		}
		if (Env.current!.position.z < max)
			Env.current!.position.z = initialEnvPosition[2];
	})


	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				<group name="Env" ref={Env} position={initialEnvPosition} scale={[1.5, 1.5, 1.5]} rotation={[0, 0, Math.PI /18]}>
					<mesh visible={state === "DZ"} name="MaroccoScene" ref={DzEnv} geometry={nodes.MaroccoScene.geometry} material={materials.MainMaterial} position={[20.462, 9.538, 104.857]} rotation={[-Math.PI, 0, -(Math.PI * 1.03)]} scale={[18.138, 2.034, 5.606]} />
					<mesh visible={state === "FR"} name="ParisScene" ref={FrEnv} geometry={nodes.ParisScene.geometry} material={materials.MainMaterial} position={[52.472, -5.851, 110.713]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.085} />
					<mesh visible={state === "KR"} name="SeolScene" ref={KrEnv} geometry={nodes.SeolScene.geometry} material={materials.MainMaterial} position={[59.341, -36.629, 157.743]} rotation={[-2.531, -1.32, -2.676]} scale={8.039} />
				</group>
				<group name="Characters" ref={Char} scale={[0.7, 0.7, 0.7]} position={initialCharacterPosition}>
					<group position={[0, 0, 0]} ref={DzChar}>
						<group name="MaroccoChar" position={[0, 0, 1.123]} rotation={[Math.PI / 2, 0, 0]} scale={7.404}>
							<primitive object={nodes.mixamorigHips} />
						</group>
						<skinnedMesh
							visible={state === "DZ"}
							name="AminaMesh"
							geometry={nodes.AminaMesh.geometry}
							material={materials.MainMaterial}
							skeleton={nodes.AminaMesh.skeleton}
							position={[0, 0, 1.123]}
							rotation={[Math.PI / 2, 0, 0]}
							scale={7.404} />
					</group>

					<group position={[0, 0, 0]} ref={KrChar}>
						<group name="SeolChar" position={[0, 0, 1.123]} rotation={[Math.PI / 2, 0, 0]} scale={7.404}>
							<primitive object={nodes.mixamorigHips_1} />
						</group>
						<skinnedMesh
							visible={state === "KR"}
							name="YunjinMesh"
							geometry={nodes.YunjinMesh.geometry}
							material={materials.MainMaterial}
							skeleton={nodes.YunjinMesh.skeleton}
							position={[0, 0, 1.123]}
							rotation={[Math.PI / 2, 0, 0]}
							scale={7.404} />
					</group>

					<group position={[0, 0, 0]} ref={FrChar}>
						<group name="ParisChar" position={[0, 0, 1.123]} rotation={[Math.PI / 2, 0, 0]} scale={7.404}>
							<primitive object={nodes.mixamorigHips_2} />
						</group>
						<skinnedMesh
							visible={state === "FR"}
							name="iloMesh"
							geometry={nodes.iloMesh.geometry}
							material={materials.MainMaterial}
							skeleton={nodes.iloMesh.skeleton}
							position={[0, 0, 1.123]}
							rotation={[Math.PI / 2, 0, 0]}
							scale={7.404} />
					</group>

				</group>
				<group name="Animals" ref={Animal} position={intialAnimalPosition}>
					<group ref={FrAnimal} position={[2, 0, 0]} >
						<group name="Puma" scale={0.192}>
							<primitive object={nodes._rootJoint} />
						</group>
						<skinnedMesh
							visible={state === "FR"}
							name="pumaMesh"
							geometry={nodes.pumaMesh.geometry}
							material={materials.MainMaterial}
							skeleton={nodes.pumaMesh.skeleton} scale={0.192} />
					</group>
					<group ref={DzAnimal} position={[2, 0, 0]} >
						<group name="snake" scale={4.083} rotation={[0, 0, 0]}>
							<primitive object={nodes.ROOT} />
						</group>
						<skinnedMesh
							visible={state === "DZ"}
							name="snakeMesh"
							geometry={nodes.snakeMesh.geometry}
							material={materials.MainMaterial}
							skeleton={nodes.snakeMesh.skeleton}
							scale={4.083} />
					</group>
					<group ref={KrAnimal} position={[2, 0, 0]} >
						<group name="Bird" rotation={[Math.PI / 2, 0, 0]}>
							<primitive object={nodes.Bone} />
						</group>
						<skinnedMesh
							visible={state === "KR"}
							name="birdMesh"
							geometry={nodes.birdMesh.geometry}
							material={materials.MainMaterial}
							skeleton={nodes.birdMesh.skeleton}
							rotation={[Math.PI / 2, 0, 0]} />
					</group>
				</group>
			</group>
		</group >
	)
}

useGLTF.preload('/SCENE-transformed.glb')

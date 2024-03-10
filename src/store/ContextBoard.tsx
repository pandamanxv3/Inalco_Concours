import { createContext, useContext, useRef } from "react";
import { useState } from 'react';
import { Group, Mesh, PerspectiveCamera } from "three";


type MeshRefsType = {
	KrEnv: React.RefObject<Mesh>;
	DzEnv: React.RefObject<Mesh>;
	FrEnv: React.RefObject<Mesh>;
	Env: React.RefObject<Group>;
	
	KrChar: React.RefObject<Group>;
	DzChar: React.RefObject<Group>;
	FrChar: React.RefObject<Group>;

	KrAnimal: React.RefObject<Group>;
	DzAnimal: React.RefObject<Group>;
	FrAnimal: React.RefObject<Group>;
	cameraRef: React.RefObject<PerspectiveCamera>;
};

type MeshContextType = {
	meshRefs: MeshRefsType;
	setMeshRefs: React.Dispatch<React.SetStateAction<MeshRefsType>>;
};

export const MeshContext = createContext<MeshContextType | undefined>(undefined);

type MeshProviderProps = {
	children: React.ReactNode;
};
export const MeshProvider = ({ children }: MeshProviderProps) => {
	const KrEnvRef = useRef<Mesh>(null);
	const DzEnvRef = useRef<Mesh>(null);
	const FrEnvRef = useRef<Mesh>(null);
	const EnvRef = useRef<Group>(null);

	const KrCharRef = useRef<Group>(null);
	const DzCharRef = useRef<Group>(null);
	const FrCharRef = useRef<Group>(null);

	const KrAnimalRef = useRef<Group>(null);
	const DzAnimalRef = useRef<Group>(null);
	const FrAnimalRef = useRef<Group>(null);

	const cameraRef = useRef<PerspectiveCamera>(null);

	const [meshRefs, setMeshRefs] = useState<MeshRefsType>({
		Env: EnvRef,
		KrEnv: KrEnvRef,
		DzEnv: DzEnvRef,
		FrEnv: FrEnvRef,

		KrChar: KrCharRef,
		DzChar: DzCharRef,
		FrChar: FrCharRef,

		KrAnimal: KrAnimalRef,
		DzAnimal: DzAnimalRef,
		FrAnimal: FrAnimalRef,
		cameraRef: cameraRef,
	});

	return (
		<MeshContext.Provider value={{ meshRefs, setMeshRefs }}>
			{children}
		</MeshContext.Provider>
	);
};

export function useMeshState() {
	const context = useContext(MeshContext);
	if (!context) {
		throw new Error('useMeshState must be used within a MeshProvider');
	}
	return context;
};
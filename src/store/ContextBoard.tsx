import { createContext, useContext, useRef } from "react";
import { useState } from 'react';
import { Group, Mesh } from "three";

// A MODIFIER


//Mesh Refs

type MeshRefsType = {
	KrEnv: React.RefObject<Mesh>;
	DzEnv: React.RefObject<Mesh>;
	FrEnv: React.RefObject<Mesh>;
	// ajoutez d'autres refs ici
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

	const [meshRefs, setMeshRefs] = useState<MeshRefsType>({
		KrEnv: KrEnvRef,
		DzEnv: DzEnvRef,
		FrEnv: FrEnvRef,
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
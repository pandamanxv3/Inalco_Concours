import {  useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { PerspectiveCamera as ThreePerspectiveCamera } from 'three';
import { useMeshState } from "../../store/ContextBoard";
import { PerspectiveCamera } from "@react-three/drei";

function Camera() {

	const { camera, size } = useThree();

	const { cameraRef } = useMeshState().meshRefs;

	useEffect(() => {
		const perspectiveCamera = camera as unknown as ThreePerspectiveCamera;

		const aspectRatio = size.width / size.height;
		const zoomAdjustment = aspectRatio <= 1.8 ? 0.8 : 1.0;

		const calculateFov = (aspectRatio: number) => {
			if (aspectRatio > 1.8) {
				return 75;
			} else if (aspectRatio <= 1.8 && aspectRatio > 1.2) {
				return 75 + (95 - 75) * ((1.8 - aspectRatio) / (1.8 - 1.2));
			} else {
				return 105;
			}
		};
		perspectiveCamera.zoom = zoomAdjustment;
		perspectiveCamera.fov = calculateFov(aspectRatio);
		perspectiveCamera.updateProjectionMatrix();
		
	}, [camera, size.width, size.height]);

	return (
		<>
			<PerspectiveCamera ref={cameraRef} makeDefault position={[-30, 29, 42]} rotation={[-1.57, -1.31433, -1.57172]} />
		</>
	)
}

export default Camera;
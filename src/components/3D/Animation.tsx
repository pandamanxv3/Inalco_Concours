import { useFrame } from '@react-three/fiber';
import useInterfaceStore from '../../store/store';
import EnvironmentAdvancing from './EnvironmentAdvancing';
import { useState } from 'react';

function Animation() {
	const [isExperienceStarted, setIsExperienceStarted] = useState<boolean>(false);
	const [startTimer, setStartTimer] = useState<number>(0);
	const { experienceStarted, updateTimer } = useInterfaceStore();

	// useEffect(() => {
	// 	if (experienceStarted) {
	// 		if (!isExperienceStarted) {
	// 			setIsExperienceStarted(true);
	// 			setStartTimer(deltaTime);
	// 		}
	// 	} else {
	// 		setIsExperienceStarted(false);
	// 	}
	// }, [experienceStarted]);
	useFrame((state) => {
		if (experienceStarted) {
			if (!isExperienceStarted) {
				setIsExperienceStarted(true);
				setStartTimer(state.clock.elapsedTime);
			}
			updateTimer(state.clock.elapsedTime - startTimer);
		} else {
			setIsExperienceStarted(false);
		}
	});

	return (
		<>
			<EnvironmentAdvancing />
		</>
	);
}

export default Animation;

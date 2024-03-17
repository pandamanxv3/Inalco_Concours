import { useNavigation } from "../../managers/useNavigation";
import { sceneConfig } from "../../store/sceneConfig";
import useInterfaceStore from "../../store/store";
import Subtitles from "./Subtitles";

const SubtitlesManager = () => {
	const { experienceStarted } = useInterfaceStore();
	const {currentIndex} = useNavigation();

	return (
		<>
			{experienceStarted && (
				<Subtitles subtitles={sceneConfig[currentIndex].subtitle} />
			)}
		</>
	);
}

export default SubtitlesManager;
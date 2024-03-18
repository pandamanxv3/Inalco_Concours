
import  { useEffect, useState } from 'react';
import styled from 'styled-components';
import useInterfaceStore from "../../store/store";
import { subtitleType } from '../../store/subtitle';

interface FadeInOutTextProps {
	$show: boolean;
}
const FadeInOutText = styled.div<FadeInOutTextProps>`
  position: absolute;
  bottom: calc(5vh + 120px);
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 65vw;
  text-align: center;
  color: white;

  opacity: ${props => props.$show ? 1 : 0};
  transition: opacity 1s ease-in-out;
`;


const FrSubtitleText = styled.p`
  font-size: 1.5vw;

`;
const KrSubtitleText = styled.p`
  font-size: 1.2vw;
`;

const DzSubtitleText = styled.p`
  font-size: 1.5vw;
`;


interface SubtitlesProps {
	subtitles: subtitleType[];
}

const Subtitles = ({ subtitles }: SubtitlesProps) => {
	const { timer } = useInterfaceStore();
	const [currentSubtitle, setCurrentSubtitle] = useState<subtitleType>();

	useEffect(() => {
		const subtitle = subtitles.find(sub => timer >= sub.startTimer && timer <= sub.endTimer);
		setCurrentSubtitle(subtitle);
	}, [timer, subtitles]);

	return (
		<FadeInOutText $show={!!currentSubtitle}>
			{currentSubtitle && (
				<>
					<FrSubtitleText>{currentSubtitle.fr}</FrSubtitleText>
					<KrSubtitleText>{currentSubtitle.kr}</KrSubtitleText>
					<DzSubtitleText>{currentSubtitle.arabic}</DzSubtitleText>
				</>
			)}
		</FadeInOutText>
	);
};


export default Subtitles;
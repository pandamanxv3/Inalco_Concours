import styled from 'styled-components';

const ImgBottomLeft = styled.img`
  position: absolute;
  bottom: -2vh;
  left:2vh;
  width: 32%;
  height: auto;
  z-index: 80;
  /* filter: invert(0.5); */
  user-select: none;
`;

const ImgTopRight = styled.img`
  position: absolute;
  top: -3vh;
  right: 0vh;
  width: 31%;
  height: auto;
  z-index: 80;
  user-select: none;
  /* filter: invert(0.5); */

`;

const ImageIntro = () => {
	  return (
	<>
		<ImgBottomLeft src="/img/bas_decoration_white.webp" alt="illustration-1" />
		<ImgTopRight src="/img/haut_decoration_white.webp" alt="illustration-2" />
	</>
  );
};

export default ImageIntro;

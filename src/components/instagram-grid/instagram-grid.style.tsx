import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0;
  z-index: 1;
  transition: 0.25s ease-in-out;
`;

export const PostImage = styled.div`
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const InstagramGridWrapper = styled.div`
  position: relative;
  overflow: hidden;
  &:hover {
    ${Overlay} {
      opacity: 0.35;
    }
  }
`;

import styled from 'styled-components';

export const Section = styled.section<{isReverse: boolean}>`
  display: flex;
  flex-direction: ${(props => props.isReverse ? 'row-reverse' : 'row')};
  height: 605px;
  width: 100%;
`;

export const FirstColumn = styled.div<{backgroundUrl: string}>`
  flex: 1;
  background-image: url(${props => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BackgroundImage = styled.img``;

export const SecondColumn = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const BoxTexts = styled.div`
  display: flex;
  gap: 45px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 530px;
  width: 100%;
`;

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  text-transform: uppercase;
`;

export const Span = styled.span`
  font-style: italic;
`;

export const Paragraphy = styled.p``;
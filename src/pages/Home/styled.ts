import styled from 'styled-components';

export const ArtisanalIceCream = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 850px;
  width: 100%;
  background-color: #f9db79;
`;

export const Text = styled.h1`
  text-transform: uppercase;
  color: #fff;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.6);
  font-size: 60px;
  z-index: 1;
`;

export const Image = styled.img`
  position: absolute;
`;

export const OurFlavors = styled.section`
  display: flex;
  height: 605px;
  width: 100%;
`;

export const FirstColumn = styled.div`
  flex: 1;
  background-image: url(/assets/images/banner-sabores.jpg);
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
import styled from 'styled-components';

export const ArtisanalIceCream = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 665px;
  width: 100%;
  background-image: url(/assets/images/banner-sabores.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Text = styled.h1`
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.6);
  font-size: 60px;
  z-index: 1;
`;

export const SecondSection = styled.section`
  height: auto;
  width: 100%;
`;

export const TitleArea = styled.div`
  padding-top: 105px;
  display: flex;
  justify-content: center;
`;

export const TitleText = styled.span`
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 600;
`;

export const CardArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 45px;
  padding: 30px 0 145px 0;
  width: 100%;
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 1020px;
`;
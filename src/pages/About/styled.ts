import styled from 'styled-components';

export const ArtisanalIceCream = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 665px;
  width: 100%;
  background-image: url(/assets/images/banner-sobre.png);
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

export const DescriptionArea = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 520px;
  width: 100%;

  @media (max-width: 425px){
    padding: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1000px;
`;

export const Title = styled.h2`

`;

export const Span = styled.span`
  font-style: italic;
  font-weight: 600;
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Paragraph = styled.p`
  text-align: center;
`;

export const ImageSection = styled.section``;

export const ImageWrapper = styled.div`
  display: flex;

  @media (max-width: 425px){
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;

  @media (max-width: 425px){
    width: 100%;
  }
`;
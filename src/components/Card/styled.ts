import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  min-height: 415px;
  box-shadow: 2px 2px 15px 2px #d9dde1;
  border-radius: 4px ;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

export const FlavourTitle = styled.span`
  font-weight: 600;
`;

export const FlavourParagraph = styled.p`
  max-width: 240px;
  width: 100%;
  font-weight: 400;
  text-align: center;
`;
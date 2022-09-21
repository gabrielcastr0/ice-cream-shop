import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: #000;
  left: 0;
  bottom: 0;
  position: relative;
`;

export const GroupItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 0;
`;


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  width: 100%;
  max-width: 1200px;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
`;

export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  color: #fff;
`;

export const Credits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  color: #fff;
  padding: 25px;
`;
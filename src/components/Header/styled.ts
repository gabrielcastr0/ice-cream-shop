import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.header`
  min-height: 80px;
  width: 100%;
  background-color: #f9db79;
  
  @media (max-width: 425px){
    padding-bottom: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  @media (max-width: 425px){
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const MenuItems = styled.ul`
  display: flex;
  gap: 55px;

  a{
    text-decoration: none;
  }
`;

export const Items = styled.li`
  list-style: none;
  color: #000;
`;
import * as Styled from './styled';
import Logo from '/assets/images/logo.png';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Logo src={Logo} alt="Gelateria Logo"/>
        <Styled.MenuItems>
          <Link to="/">
            <Styled.Items>Home</Styled.Items>
          </Link>
          <Link to="/about">
            <Styled.Items>Sobre</Styled.Items>
          </Link>
          <Link to="/flavors">
            <Styled.Items>Sabores</Styled.Items>
          </Link>
        </Styled.MenuItems>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

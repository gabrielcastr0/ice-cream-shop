import * as Styled from './styled';
import Logo from '/assets/images/logo.png';

export default function Footer() {
  return (
    <Styled.Container>
      <Styled.GroupItems>
        <Styled.Wrapper>
          <Styled.Logo src={Logo} alt="Gelateria"/>

          <Styled.Info>
            <Styled.Title>Endereço</Styled.Title>
            <Styled.WrapperTexts>
              <Styled.Text>Av. Bernadino de Campos, 98</Styled.Text>
              <Styled.Text>São Paulo, SP 12345-678</Styled.Text>
            </Styled.WrapperTexts>
          </Styled.Info>
          
          <Styled.Info>
            <Styled.Title>Contato</Styled.Title>
            <Styled.WrapperTexts>
              <Styled.Text>info@meusite.com</Styled.Text>
              <Styled.Text>Tel: (11) 3456-7890</Styled.Text>
            </Styled.WrapperTexts>
          </Styled.Info>

          <Styled.Info>
            <Styled.Title>Horários</Styled.Title>
            <Styled.WrapperTexts>
              <Styled.Text>Aberto todos os dias</Styled.Text>
              <Styled.Text>10:00 - 22:00</Styled.Text>
            </Styled.WrapperTexts>
          </Styled.Info>
        </Styled.Wrapper>
      </Styled.GroupItems>
      <Styled.Credits>
        <Styled.Span>Gelateria. Orgulhosamente desenvolvido por gc4str0.tsx</Styled.Span>
      </Styled.Credits>
    </Styled.Container>
  )
}

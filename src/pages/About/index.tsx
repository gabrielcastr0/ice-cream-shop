import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as Styled from './styled';

import FirstImage from '/assets/images/sobre-image.jpg';
import SecondImage from '/assets/images/sorveteria.jpg';

export default function About() {
  return (
    <main>
      <Header />

      <Styled.ArtisanalIceCream>  
        <Styled.Text>A gelateria</Styled.Text>
      </Styled.ArtisanalIceCream>

      <Styled.DescriptionArea>
        <Styled.TextArea>
          <Styled.Wrapper>
            <Styled.Title>Sobre Nós</Styled.Title>
            <Styled.Span>Nós simplesmente amamos sorvete!</Styled.Span>
          </Styled.Wrapper>
          
          <Styled.ParagraphWrapper>
            <Styled.Paragraph>
              Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
              sorvete produzido. Fazemos o melhor sorvete para os nossos
              clientes e gostamos de receber elogios. Estamos operando desde
              2009 com as melhores matérias-primas para a produção final do
              sorvete. Vendemos tanto para varejo como para atacado.
            </Styled.Paragraph>

            <Styled.Paragraph>
              Nossos clientes podem comprar os nossos sorvetes e degustar na
              nossa loja ou levar para sua residência e aproveitar junto com a
              família. Também vendemos para estabelecimentos e criamos eventos
              como festa de aniversário, formaturas e eventos empresariais. Para
              contratar os nossos serviços, basta entrar em contato conosco.
              Iremos proporcionar o melhor atendimento e os melhores produtos
              para você fazer a sua festa mais saborosa, com o melhor sorvete da
              cidade.
            </Styled.Paragraph>
          </Styled.ParagraphWrapper>
        </Styled.TextArea>
      </Styled.DescriptionArea>

      <Styled.ImageSection>
        <Styled.ImageWrapper>
          <Styled.Image src={FirstImage}/>
          <Styled.Image src={SecondImage}/>
        </Styled.ImageWrapper>
      </Styled.ImageSection>

      <Footer />
    </main>
  )
}

import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as Styled from './styled';
import Oreo from '/assets/images/sabor-oreo.png';
import Pistache from '/assets/images/sabor-pistache.png';
import CookieAndAvela from '/assets/images/sabor-cookies-avela.png';
import Kiwi from '/assets/images/sorbet-kiwi.png';
import Morango from '/assets/images/sorbet-morango.png';
import Lemon from '/assets/images/sorbet-limao.png';

export default function About() {
  return (
    <main>
      <Header />

      <Styled.ArtisanalIceCream>  
        <Styled.Text>Nossos sabores</Styled.Text>
      </Styled.ArtisanalIceCream>

      <Styled.SecondSection>
        <Styled.TitleArea>
          <Styled.TitleText>Sabores de sorvete</Styled.TitleText>
        </Styled.TitleArea>

        <Styled.CardArea>
          <Card image={Oreo} title="Sorvete de Oreo" paragraph="Delicioso sorvete sabor Oreo. Uma explosão de sabor."/>

          <Card image={Pistache} title="Sorvete Pistache" paragraph="Cremoso sorvete sabor pistache com pedacinhos de semente."/>

          <Card image={CookieAndAvela} title="Sorvete Cookies & Avelã" paragraph="O nosso melhor sorvete. Você vai adorar o sabor."/>

          <Card image={Kiwi} title="Sorvete de Kiwi" paragraph="Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C."/>

          <Card image={Morango} title="Sorvete de Morango" paragraph="Sorvete de morango gourmet. Tradicional e saboroso"/>

          <Card image={Lemon} title="Sorvete de Limão Siciliano" paragraph="O incrível sorvete gourmet de limão siciliano vai te encantar."/>
        </Styled.CardArea>
      </Styled.SecondSection>

      <Footer />
    </main>
  )
}

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section from "../../components/Section";
import * as Styled from './styled';
import BannerHome from '/assets/images/banner-home.png';
import BannerSabores from '/assets/images/banner-sabores.jpg';
import BannerEventos from '/assets/images/eventos-image.jpg';
import BannerSobre from '/assets/images/sobre-image.jpg';

export default function Home() {
  return (
    <main>
      <Header />

      <Styled.ArtisanalIceCream>  
        <Styled.Text>Sorvete Artesanal</Styled.Text>
        <Styled.Image src={BannerHome} alt="Imagem de um sorvete"/>
      </Styled.ArtisanalIceCream>

      <Section title="Nossos sabores" span="Novos e deliciosos!" paragraphy="Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactiose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!" backgroundUrl={BannerSabores} isReverse={false}/>

      <Section title="Nossos eventos" span="Delicias com sorvete!" paragraphy="Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente." backgroundUrl={BannerEventos} isReverse={true}/>

      <Section title="Sobre nós" span="Alegria em cada casquinha!" paragraphy="Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visitra e aproveite o melhor atendimento e o melhor sorvete da cidade." backgroundUrl={BannerSobre} isReverse={false}/>

      <Footer />
    </main>
  )
}

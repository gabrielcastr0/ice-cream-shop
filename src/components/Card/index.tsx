import * as Styled from './styled';

type Props = {
  image: string;
  title: string;
  paragraph: string;
}

export default function Card({image, title, paragraph}: Props) {
  return (
    <Styled.Container>
      <Styled.Image src={image}/>
      <Styled.InfoArea>
        <Styled.FlavourTitle>{title}</Styled.FlavourTitle>
        <Styled.FlavourParagraph>{paragraph}</Styled.FlavourParagraph>
      </Styled.InfoArea>
    </Styled.Container>
  )
}

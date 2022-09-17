import * as Styled from './styled';

type Props = {
  title: string;
  span: string;
  paragraphy: string;
  backgroundUrl: string;
  isReverse: boolean;
}

export default function Section({title, span, paragraphy, backgroundUrl, isReverse}: Props) {
  return (
    <Styled.Section isReverse={isReverse}>
      <Styled.FirstColumn backgroundUrl={backgroundUrl}/>

      <Styled.SecondColumn>
        <Styled.BoxTexts>
          <Styled.WrapperText>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Span>{span}</Styled.Span>
          </Styled.WrapperText>
          <Styled.Paragraphy>{paragraphy}</Styled.Paragraphy>
        </Styled.BoxTexts>
      </Styled.SecondColumn>
    </Styled.Section>
  )
}

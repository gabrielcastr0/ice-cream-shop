import * as Styled from './styled';

type Props = {
  title: string;
  span: string;
  paragraph: string;
  backgroundUrl: string;
  isReverse: boolean;
}

export default function Section({title, span, paragraph, backgroundUrl, isReverse}: Props) {
  return (
    <Styled.Section isReverse={isReverse}>
      <Styled.FirstColumn backgroundUrl={backgroundUrl} />

      <Styled.SecondColumn>
        <Styled.BoxTexts>
          <Styled.WrapperText>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Span>{span}</Styled.Span>
          </Styled.WrapperText>
          <Styled.Paragraph>{paragraph}</Styled.Paragraph>
        </Styled.BoxTexts>
      </Styled.SecondColumn>
    </Styled.Section>
  )
}

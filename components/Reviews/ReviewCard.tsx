import { styled } from "styled-components";
import { Review } from "@/api/review/get";

export default function ReviewCard(prop: {
  data: Review;
}) {
  return (
    <>
    <Wrapper onClick={()=>window.open(prop.data.url)}>
        <Color/>
        <Container>
          <Title>📝{prop.data.title} [{prop.data.score}]</Title>
          <ContentWrapper>
            <Content>{prop.data.content}</Content>
          </ContentWrapper>
          <Footer>👍 {prop.data.like} • {prop.data.timestamp}</Footer>
        </Container>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  
  padding: 20px 0 0 0;

  cursor: pointer;
  div {
    filter: brightness(1.0);
  }
  @media (hover: hover) {
    &:hover {
      div {
        filter: brightness(0.8);
      }
    }
  }
  
  @media screen and (max-width: 500px) {
    padding: calc(20 * 100vw / 500) 0 0 0;
  }
`

const Color = styled.div`
  flex-shrink: 0;
  width: 10px;
  background: #1E1F22;
  border-radius: 10px 0 0 10px;

  @media screen and (max-width: 500px) {
    --radius-value: calc(10 * 100vw / 500);
    boarder-radius: 0 var(--radius-value) var(--radius-value) 0;
    width: calc(10 * 100vw / 500);
  }
`

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  background: #2B2D31;
  border-radius: 0 10px 10px 0;
  
  @media screen and (max-width: 500px) {
    --radius-value: calc(10 * 100vw / 500);
    boarder-radius: 0 var(--radius-value) var(--radius-value) 0;
  }
`

const Title = styled.div`
  padding: 10px 20px 5px 20px;

  color: #FFFFFF;
  font-family: DM Sans;

  font-size: 18pt;
  font-style: normal;
  font-weight: 700;
  
  @media screen and (max-width: 500px) {
    font-size: calc(18 * 100vw / 450);
    padding: calc(10 * 100vw / 500) calc(20 * 100vw / 500) calc(5 * 100vw / 500) calc(20 * 100vw / 500);
  }
`

const ContentWrapper = styled.div`
  padding: 0 20px 5px 20px;
  @media screen and (max-width: 500px) {
    padding: 0 calc(20 * 100vw / 500) calc(5 * 100vw / 500) calc(20 * 100vw / 500);
  }
`
const Content = styled.div`
  background: #1E1F22;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  
  color: #FFFFFF;
  font-family: DM Mono;
  white-space: wrap;

  font-size: 13pt;
  font-style: normal;
  font-weight: 500;
  
  @media screen and (max-width: 500px) {
    font-size: calc(13 * 100vw / 450);
    padding: calc(5 * 100vw / 500) calc(10 * 100vw / 500);
  }
`

const Footer = styled.div`
  padding: 2px 20px 15px 20px;
  display: flex;
  align-items: center;

  color: #FFFFFF;
  font-family: DM Sans;

  font-size: 10pt;
  font-style: normal;
  
  @media screen and (max-width: 500px) {
    font-size: calc(10 * 100vw / 450);
    padding: calc(2 * 100vw / 500) calc(20 * 100vw / 500) calc(15 * 100vw / 500) calc(20 * 100vw / 500);
  }
`
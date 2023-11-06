import { Review } from "@/lib/recoil/reviews";
import { styled } from "styled-components";

export default function ReviewCard(prop: {
  data: Review;
}) {
  const date = new Date(prop.data.timestamp);
  return (
    <>
    <Wrapper onClick={()=>window.open(`${prop.data.URL}`)}>
        <Color/>
        <Container>
          <Title>📝{prop.data.title} [{"★".repeat(prop.data.score).padEnd(5,"☆")}]</Title>
          <ContentWrapper>
            <Content>{prop.data.content}</Content>
          </ContentWrapper>
          <Footer>👍 {prop.data.likes} • {date.toLocaleString()}</Footer>
        </Container>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  
  margin: 20px 0 0 0;
  
  @media screen and (max-width: 500px) {
    margin: calc(20 * 100vw / 500) 0 0 0;
  }
  
  cursor: pointer;
  div {
    filter: brightness(1.0);
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      div {
        filter: brightness(0.9);
      }
    }
  }
`

const Color = styled.div`
  flex-shrink: 0;
  width: 10px;
  background: #1E1F22;
  --radius-value: 10px;

  @media screen and (max-width: 500px) {
    --radius-value: calc(10 * 100vw / 500);
    width: calc(10 * 100vw / 500);
  }
  border-radius: var(--radius-value) 0 0 var(--radius-value);
`

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  background: #2B2D31;
  --radius-value: 10px;
  
  @media screen and (max-width: 500px) {
    --radius-value: calc(10 * 100vw / 500);
  }
  border-radius: 0 var(--radius-value) var(--radius-value) 0;
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
    border-radius: calc(5 * 100vw / 500);
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
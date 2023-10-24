import { styled } from "styled-components";

export default function CardInfo(prop: { 
    name: string;
    id: string;
    comment: string;
}) {
  return (
    <>
    <Container>
      <Name>{prop.name}</Name>
      <SecondRow>
        <ID>{prop.id}</ID>
        <Image src="/bot/tag.svg" alt="tag"/>
      </SecondRow>
      <Comment>{prop.comment}</Comment>
    </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 0 0 5px 0;

  color: #FFFFFF;
  font-family: DM Sans;
  white-space: nowrap;
  
  @media screen and (max-width: 500px) {
    padding: 0 0 calc(5 * 100vw / 500) 0;
  }

  div {
    font-size: calc(var(--font-size) * 1px);
    @media screen and (max-width: 500px) {
      font-size: calc(var(--font-size) * 100vw / 500);
    }
  }
  * {
    top: calc(var(--top) * 1px);
    @media screen and (max-width: 500px) {
      top: calc(var(--top) * 100vw / 500);
    }
  }
`

const SecondRow = styled.div`
  display:flex;

  position:relative;
  --top:-42;
`

const Name = styled.div`
  --font-size: 50;
  font-weight: 1000;
  
  position:relative;
  --top:-22;
`

const ID = styled.div`
  --font-size: 32;
  font-weight: 700;
  
  --top: 0;
`

const Image = styled.img`
  position:relative;
  --top: 12.25;
  left: 7px;
  width: 50px;
  height: 25px;
  
  @media screen and (max-width: 500px) {
    width: calc(50 * 100vw / 500);
    height: calc(25 * 100vw / 500);
  }
`

const Comment = styled.div`
  --font-size: 30;
  font-weight: 200;

  position:relative;
  --top: -12;
`

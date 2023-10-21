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
        <Image src="/bot/icon.svg" alt="bot" width={50} height={25}/>
      </SecondRow>
      <Comment>{prop.comment}</Comment>
    </Container>
    </>
  );
}

const SecondRow = styled.div`
  display:flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 160px;

  position:relative;
  top: 23px;
  
  color: #FFFFFF;
  font-family: DM Sans;
  white-space: nowrap;
`

const Name = styled.div`
  font-size: 50px;
  font-weight: 1000;
`

const ID = styled.div`
  font-size: 32px;
  font-weight: 700;

  position:relative;
  top:-20px;
`

const Image = styled.img`
  position:relative;
  top: -18.5px;
  left: 7px;
`

const Comment = styled.div`
  font-size: 30px;
  font-weight: 200;

  position:relative;
  top: 10px;
`

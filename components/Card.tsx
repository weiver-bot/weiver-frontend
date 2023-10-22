import { styled } from "styled-components";
import CardInfo from "./Card/Info";
import CardButton from "./Card/Button";

export interface CardData {
  name: string;
  id: string;
  state: string;

  inviteURL: string;
  communityURL: string;
}

export default function Card(prop: {
  data: CardData
}) {
  return (
    <>
    <Wrapper>
      <Container>
        <CardInfo name={prop.data.name} id={prop.data.id} comment={prop.data.state}/>
        <Division/>
        <ButtonContainer>
          <CardButton text={"Add to Server"} handler={()=>{
            window.open(prop.data.inviteURL);
            }}/>
          <CardButton text={"Community"} handler={()=>{
            window.open(prop.data.communityURL)
          }}/>
        </ButtonContainer>
      </Container>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 90%;
  border-radius: 30px;
  background: #111214;
  
  @media screen and (max-width: 500px) {
    border-radius: calc(30 * 100vw / 500);
  }
`;

const Container = styled.div`
  padding: 47px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    padding: calc(47 * 100vw / 500);
    top: calc(10 * 100vw / 500);
  }
`

const Division = styled.div`
  width: 100%;
  height: 3px;
  transform: rotate(-0.09deg);
  
  background: #2E2F34;
  
  @media screen and (max-width: 500px) {
    height: calc(3 * 100vw / 500);
    top: calc(60 * 100vw / 500);
  }
`

const ButtonContainer = styled.div`
  padding: 27px 0 0 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 500px) {
    padding: calc(27 * 100vw / 500) 0 0 0;
  }
`
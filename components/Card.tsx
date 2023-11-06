import { styled } from "styled-components";
import { NextRouter } from "next/router";
import { useRecoilState } from "recoil";
import { AniFrom } from "@/lib/recoil/top";
import CardInfo from "./Card/Info";
import CardButton from "./Card/Button";
import useInfo from "@/lib/hooks/useAxiosInfo";
import useState from "@/lib/hooks/useAxiosState";

export default function Card(prop: {
  $router: NextRouter
}) {
  const [_, setAniFrom] = useRecoilState(AniFrom);
  const info = useInfo();
  const state = useState();

  return (
    <>
    <Wrapper>
      <Container>
        <CardInfo name={info.name} id={info.id} comment={`Total ⭐${state.avg.toFixed(1)} (${state.count})`}/>
        <Division/>
        <ButtonContainer>
          <Row>
            <CardButton text={"Reviews"} handler={()=>{
              setAniFrom([300, 0.06, true]);
              prop.$router.push("/review")
            }}/>
          </Row>
          <Row>
            <CardButton text={"Add to Server"} handler={()=>{
              window.open(info.URL.invite);
            }}/>
            <CardButton text={"Community"} handler={()=>{
              window.open(info.URL.community);
            }}/>
          </Row>
        </ButtonContainer>
      </Container>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  --margin: 40px;
  margin: 0 var(--margin) var(--margin) var(--margin);
  border-radius: var(--margin);
  background: #111214;

  @media screen and (max-width: 500px) {
    --margin: calc(40 * 100vw / 500);
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
  transform: translateY(50%);
  margin: 27px 0;
  
  @media screen and (max-width: 500px) {
    height: calc(3 * 100vw / 500);
    margin: calc(27 * 100vw / 500) 0;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > *:nth-child(n+2) {
    padding: 15px 0 0 0;
    @media screen and (max-width: 700px) {
      padding: calc(15 * 100vw / 700) 0 0 0;
    }
  }
`

const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  > * {
	  flex: 1 1 0;
  }
  :nth-child(n+2) {
    margin-left:15px;
    @media screen and (max-width: 700px) {
      margin-left: calc(15 * 100vw / 700);
    }
  }
`
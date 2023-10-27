import { styled } from "styled-components";
import CardInfo from "./Card/Info";
import CardButton from "./Card/Button";
import { useEffect, useState } from 'react';;
import GetState from "@/api/state/get";
import GetURL from "@/api/url/get";
import { NextRouter } from "next/router";
import { useRecoilState } from "recoil";
import { AniFrom } from "@/recoil/Top";
import { State, URL } from "@/recoil/bot";

export default function Card(prop: {
  $router: NextRouter
}) {
  const [_, setAniFrom] = useRecoilState(AniFrom);
  const [state, setState] = useRecoilState(State);
  const [url, setURL] = useRecoilState(URL);
  
  useEffect(() => {
    GetState().then(res=>{
      setState(res);
    }).catch(()=>{})
    GetURL().then(res=>{
      setURL(res);
    }).catch(()=>{})
  }, []);

  return (
    <>
    <Wrapper>
      <Container>
        <CardInfo name={state.name} id={state.id} comment={state.state}/>
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
              window.open(url.invite);
            }}/>
            <CardButton text={"Community"} handler={()=>{
              window.open(url.community);
            }}/>
          </Row>
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
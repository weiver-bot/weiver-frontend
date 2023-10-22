import { styled } from "styled-components";
import CardInfo from "./Card/Info";
import CardButton from "./Card/Button";
import { useEffect, useState } from 'react';;
import GetState from "@/api/state/get";
import GetURL from "@/api/url/get";
import { useRecoilValue } from "recoil";
import { DoCardReload } from "./Card/Reload";
import CardReload from "@/components/Card/Reload";

export default function Card() {
  const [name, setName] = useState("WEIVER")
  const [id, setID] = useState("WEIVER#2142")
  const [state, setState] = useState("Hello, I am WEIVER")

  const [inviteURL, setInviteURL] = useState("https://discord.com/oauth2/authorize?client_id=1152529500689666088&permissions=268438528&scope=bot%20applications.commands")
  const [communityURL, setCommunityURL] = useState("https://discord.gg/n2sn6CSeXZ")
  
  const reload = useRecoilValue(DoCardReload);

  useEffect(() => {
    GetState().then(res=>{
      setName(res.name);
      setID(res.id);
      setState(res.state);
    }).catch(()=>{})
    GetURL().then(res=>{
      setInviteURL(res.invite);
      setCommunityURL(res.community)
    }).catch(()=>{})
  }, [reload]);

  return (
    <>
    <Wrapper>
      <Container>
        <CardReload/>
        <CardInfo name={name} id={id} comment={state}/>
        <Division/>
        <ButtonContainer>
          <CardButton text={"Add to Server"} handler={()=>{
            window.open(inviteURL);
            }}/>
          <CardButton text={"Community"} handler={()=>{
            window.open(communityURL)
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
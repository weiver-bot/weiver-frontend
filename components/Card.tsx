import { styled } from "styled-components";
import CardInfo from "./Card/Info";
import CardButton from "./Card/Button";
import Interval from "./Interval";
import { useEffect, useState } from 'react';
import GetURL from "@/api/url/get";

export default function Card(prop: {
  name: string;
  id: string;
  comment: string;
}) {
  const [InviteURL, setInviteURL] = useState("https://discord.com/api/oauth2/authorize?client_id=1152529500689666088&permissions=268438528&scope=bot%20applications.commands");
  const [CommunityURL, setCommunityURL] = useState("https://discord.gg/n2sn6CSeXZ");

  useEffect(() => {
      GetURL().then((res) => {
        setInviteURL(res.invite)
        setCommunityURL(res.community)
      }).catch(()=>{});
  }, []);

  return (
    <>
    <Wrapper>
      <Interval $amount={44}/>
      <Container>
        <CardInfo name={prop.name} id={prop.id} comment={prop.comment}/>
        <Division/>
        <ButtonContainer>
          <CardButton text={"Add to Server"} handler={()=>{
            window.open(InviteURL);
            }}/>
          <CardButton text={"Community"} handler={()=>{
            window.open(CommunityURL)
          }}/>
        </ButtonContainer>
      </Container>
      <Interval $amount={44}/>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 365px;
  width: 90%;
  border-radius: 30px;
  background: #111214;

  display: flex;

  position:relative;
  top: 106px
`;

const Container = styled.div`
  flex-grow: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Division = styled.div`
  width: 100%;
  height: 3px;
  transform: rotate(-0.09deg);
  flex-shrink: 0;

  background: #2E2F34;
  
  position:relative;
  top: 60px
`

const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  
  position:relative;
  top: 90px
`
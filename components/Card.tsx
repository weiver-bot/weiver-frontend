import { styled } from "styled-components";
import CardInfo from "./Card/Info";
import CardButton from "./Card/Button";
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
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 90%;
  border-radius: 30px;
  background: #111214;
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
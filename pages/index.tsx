import { styled } from "styled-components";
import Profile from '@/components/Profile';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';
import GetState from "@/api/state/get";
import CardReload from "@/components/Card/Reload";
import GetURL from "@/api/url/get";
import { CardData } from "@/components/Card"

export default function Home() {
  const [data, setData] = useState<CardData>({
    name: "WEIVER",
    id: "WEIVER#2142",
    state: "Hello, I am WEIVER",
    inviteURL: "https://discord.com/api/oauth2/authorize?client_id=1152529500689666088&permissions=268438528&scope=bot%20applications.commands",
    communityURL: "https://discord.gg/n2sn6CSeXZ"
  });
  const [reload, doReload] = useState(0);
  const [state, setState] = useState("online");
  
  useEffect(() => {
      GetState().then((res) => {
        GetURL().then((resURL) => {
          setData({
            name: res.name,
            id: res.id,
            state: res.state,
            inviteURL: resURL.invite,
            communityURL: resURL.community
          });
        }).catch(()=>{setState("offline")})
      }).catch(()=>{setState("offline")})
  }, [reload]);

  return (
    <>
    <Containter>
      <CardReload handler={()=>{doReload(reload+1)}}/>
      <Profile state={state}/>
      <Card data={data}/>
    </Containter>
    </>
  )
}

const Containter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`;
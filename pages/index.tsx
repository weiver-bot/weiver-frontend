import { styled } from "styled-components";
import Profile from '@/components/Profile';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';
import GetState from "@/api/state/get";

export default function Home() {
  const [name, setName] = useState("WEIVER");
  const [id, setID] = useState("WEIVER#2142");
  const [stateText, setStateText] = useState("Hello, I am WEIVER");
  const [state, setState] = useState("online");

  useEffect(() => {
      GetState().then((res) => {
          setName(res.name);
          setID(res.id);
          setStateText(res.state);
      }).catch(()=>{
        setState("offline");
      });
  }, []);

  return (
    <>
    <Containter>
      <Profile state={state}/>
      <Card name={name} id={id} comment={stateText}/>
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
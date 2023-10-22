import { styled } from "styled-components";
import Profile from '@/components/Profile';
import Card from '@/components/Card';
import CardReload from "@/components/Card/Reload";

export default function Home() {
  return (
    <>
    <Containter>
      <CardReload/>
      <Profile/>
      <Card/>
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
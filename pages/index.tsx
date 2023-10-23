import { styled } from "styled-components";
import Profile from '@/components/Profile';
import Card from '@/components/Card';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <>
    <Containter>
      <Profile/>
      <Card/>
      <Reviews/>
    </Containter>
    </>
  )
}

const Containter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

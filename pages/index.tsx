import { styled } from "styled-components";
import Profile from '@/components/Profile';
import Card from '@/components/Card';
import Reviews from '@/components/Reviews';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
    <Containter>
      <Profile/>
      <Card/>
      <Reviews router={router}/>
    </Containter>
    </>
  )
}

const Containter = styled.div`
  height: 100%;
  width: 100vw;
  background: #313338;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

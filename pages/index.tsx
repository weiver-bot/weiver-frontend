import { styled } from "styled-components";
import Top from '@/components/Top';
import Card from '@/components/Card';
import { useRouter } from "next/router";
import Loading from "@/components/Loading";

export default function Home() {
  const router = useRouter();

  if (!router.isReady) {
    return (
    <>
      <Loading/>
    </>
    )
  }

  return (
    <>
    <Containter>
      <Top $height={300} $center={true} $handler={()=>window.open("https://github.com/weiver-bot")} $popmsg="View Github" $fontratio={0.06}/>
      <Wrapper>
        <Card $router={router}/>
      </Wrapper>
    </Containter>
    </>
  )
}

const Containter = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  position: relative;
  animation: move 1s 1, fadeIn 1s 1;
  > * {
    animation: fadeIn 1s 1;
  }
`

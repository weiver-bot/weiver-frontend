import { styled } from "styled-components";
import Reviews from '@/components/Reviews';
import { useRouter } from "next/router";
import Top from "@/components/Top";
import { useRecoilState } from "recoil";
import { AniFrom } from "@/recoil/Top";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function Review() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  const [_, setAniFrom] = useRecoilState(AniFrom);

  useEffect(()=>{
    setIsReady(router.isReady);
  }, [router.isReady]);

  if (!isReady) {
    return <Loading/>;
  }

  return (
    <>
    <Containter>
        <Top $height={100} $center={false} $handler={()=>{
            setAniFrom([100, 0.1, false]);
            router.push("/")
        }} $popmsg="Home" $fontratio={0.1}/>
        <Reviews router={router}/>
    </Containter>
    </>
  )
}

const Containter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

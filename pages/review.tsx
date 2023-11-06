import { styled } from "styled-components";
import ReviewList from '@/components/Reviews';
import { useRouter } from "next/router";
import Top from "@/components/Top";
import { useRecoilState } from "recoil";
import { AniFrom } from "@/lib/recoil/top";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Auth from "@/components/Auth";

export default function Review() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [_, setAniFrom] = useRecoilState(AniFrom);

  useEffect(()=>{
    setIsReady(router.isReady);
  }, [router]);
  
  if (!isReady) {
    return <Loading/>;
  } else {
    router.beforePopState(() => {
      setAniFrom([100, 0.1, false]);
      return true
    })
  }

  return (
    <>
    <Auth/>
    <Containter>
        <Top height={100} center={false} handler={()=>{
            setAniFrom([100, 0.1, false]);
            router.push("/")
        }} popmsg="Home" fontratio={0.1}/>
        <ReviewList router={router}/>
    </Containter>
    </>
  )
}

const Containter = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

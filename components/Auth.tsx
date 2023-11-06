import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { User } from "@/lib/recoil/auth";
import { useAxiosAuth } from "@/lib/hooks/useAxiosAuth";
import Loading from "./Loading";
import { AniFrom } from "@/lib/recoil/top";

export default function Auth() {
  const axiosAuth = useAxiosAuth();
  const [user, setUser] = useRecoilState(User);
  const [isLoading, setLoading] = useState(true);
  const Ani = useRecoilValue(AniFrom);

  useEffect(()=>{
    axiosAuth.get(
      "https://discord.com/api/users/@me", 
      { withCredentials: true }
    ).then(res=>{
      setUser({
        id: res.data.id,
        avatar: res.data.avatar
      })
      setLoading(false);
    }).catch(()=>{
      setLoading(false);
    });
  }, [])

  return (
    <>
    <Wrapper onClick={()=> {
      if (user) {
        location.href = process.env.API_URL + "/auth/logout";
      } else {
        location.href = process.env.API_URL + "/auth/login"
      }
    }}>
    <Svg viewBox="0 0 24 24">
      <g fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C12.4883 22 12.9684 21.965 13.438 21.8974C12.5414 20.8489 12 19.4877 12 18C12 17.6593 12.0284 17.3252 12.083 17H6V16.0244C6 14.0732 10 13 12 13C12.6215 13 13.436 13.1036 14.2637 13.305C15.2888 12.4882 16.5874 12 18 12C19.4877 12 20.8489 12.5414 21.8974 13.438C21.965 12.9684 22 12.4883 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12Z" fill="#FFFFFF"/>
        <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" fill="#FFFFFF"/>
      </g>
    </Svg>
    {!isLoading||Ani ? user && <Image $animation={!Ani} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}/>: <Loading/>}
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: center;

  position: fixed;
  height: 70px;
  aspect-ratio: 1;
  z-index: 100;

  --term: 40px;
  right: var(--term);
  bottom: var(--term);

  opacity : 0.3;
  
  cursor: pointer;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: all ease 0.2s 0s;
      opacity : 0.67;
    }
  }
  &:active {
    opacity: 0.825;
  }
  
  @media screen and (max-width: 500px) {
    --term: calc(40 * 100vw / 500);
    height: calc(70 * 100vw / 500);
  }
  border-radius: 50%;
`

const Image = styled.img<{
  $animation: boolean
}>`
  border-radius: 50%;
  height: 100%;
  aspect-ratio: 1;
  z-index: 1;
  ${prop=>prop.$animation && `animation: fadeIn 1s 1;`}
`

const Svg = styled.svg`
  height: 95%;
  position: absolute;
`
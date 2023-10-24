import { styled } from "styled-components";
import { useEffect, useState } from 'react';
import GetState from "@/api/state/get";
import { useRecoilValue } from "recoil";
import { DoCardReload } from "./Card/Reload";

export default function Profile() {
    const [state, setState] = useState("online");

    const reload = useRecoilValue(DoCardReload);
    
    useEffect(() => {
        GetState().then(()=>{
            setState("online");
        }).catch(()=>{
            setState("offline");
        })
    }, [reload]);

    return (
        <>
        <Container>
            <Banner />
            <Image src="/bot/frame.svg" alt="frame" $size={210} />
            <ProfileWrapper onClick={()=>window.open("https://github.com/weiver-bot")}>
                <Image src="/bot/profile.png" alt="profile" $size={170}/>
                <GitView>View github</GitView>
            </ProfileWrapper>
            <Wrapper $left={60} $top={60}>
                <Image src={`/bot/state/${state}.svg`} alt={state} $size={60} />
            </Wrapper>
        </Container>
        </>
    );
}

const Container = styled.div`
    > img, button {
        transform: translate(-50%, -50%);
        
        position:absolute;
        top: 187px;
        left: 50vw;
        @media screen and (max-width: 500px) {
            top: calc(187 * 100vw / 500);
        }
    }
    
    height: 292px;
    @media screen and (max-width: 500px) {
        height: calc(292 * 100vw / 500);
    }
`

const Banner = styled.div`
    height: 187px;
    width: 100vw;
    background: #000000;

    @media screen and (max-width: 500px) {
        height: calc(187 * 100vw / 500);
    }
`

const Wrapper = styled.div<{
    $top: number;
    $left: number;
}>`
    transform: translate(-50%, -50%);

    position:absolute;
    top: ${prop=>prop.$top + 187}px;
    left: calc(50vw + ${prop=>prop.$left}px);

    @media screen and (max-width: 500px) {
        top: calc(${prop=>prop.$top + 187} * 100vw / 500);
        left: calc(50vw + ${prop=>prop.$left} * 100vw / 500);
    }
`

const GitView = styled.div`
    position:absolute;
    font-family: DM Sans;
  
    font-size: 12pt;
    font-style: normal;
    font-weight: 600;
    
    @media screen and (max-width: 500px) {
        font-size: calc(12 * 100vw / 375);
    }
`

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    transform: translate(-50%, -50%);
    position:absolute;
    top: 187px;
    left: 50vw;

    cursor: pointer;
    color: rgba(255,255,255,0);
    @media (hover: hover) {
        color: rgba(255,255,255,1);
        > img {
            filter: brightness(0.5);
        }
    }
    
    > img {
        filter: brightness(1.0);
        border-radius: 50%;
    }
    
    @media screen and (max-width: 500px) {
        top: calc(187 * 100vw / 500);
    }
`

const Image = styled.img<{
    $size: number;
}>`
    width: ${prop=>prop.$size}px;
    height: ${prop=>prop.$size}px;

    @media screen and (max-width: 500px) {
        width: calc(${prop=>prop.$size} * 100vw / 500);
        height: calc(${prop=>prop.$size} * 100vw / 500);
    }
`

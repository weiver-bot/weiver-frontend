import { css, keyframes, styled } from "styled-components";
import { useEffect } from 'react';
import { Online } from "@/lib/recoil/bot";
import { useRecoilState, useRecoilValue } from "recoil";
import BotState from "./Top/BotState";
import { AniFrom } from "@/lib/recoil/top";
import useReviewState from "@/lib/hooks/useAxiosState";

export default function Top(prop: {
    height: number;
    center: boolean;
    handler: ()=>any;
    popmsg: string
    fontratio: number;
}) {
    const [online, setOnline] = useRecoilState(Online);
    const aniFrom = useRecoilValue(AniFrom);
    const state = useReviewState();

    useEffect(() => {
        setOnline(state.count != 0)
    }, [state]);

    return (
        <>
        <Container 
            $height={prop.height} 
            $center={prop.center} 
            $fontratio={prop.fontratio} 
            $from={aniFrom ? aniFrom : [prop.height, prop.fontratio, prop.center]
        }>
            <Banner/>
            <Frame>
                <ProfileWrapper onClick={prop.handler}>
                    <Image src="/bot/profile.png" alt="profile"/>
                    <GitView id="text">{prop.popmsg}</GitView>
                </ProfileWrapper>
                <BotState online={online} animation={!aniFrom}/>
            </Frame>
        </Container>
        </>
    );
}

const HeightAni = keyframes`
    from {
        height: var(--height-from);
    }
`
const TransformAni = keyframes`
    from {
        transform: var(--transform-from);
        left: var(--left-from);
    }
`

const FontAni = keyframes`
    from {
        font-size: var(--font-size-from);
    }
`

const Container = styled.div<{
    $height: number;
    $center: boolean;
    $from : [number, number, boolean];
    $fontratio: number;
}>`
    height: ${prop=>prop.$height}px;
    --height-from: ${prop=>prop.$from[0]}px;
    @media screen and (max-width: 500px) {
        height: calc(${prop=>prop.$height} * 100vw / 500);
        --height-from: calc(${prop=>prop.$from[0]} * 100vw / 500);
    }
    ${css`animation: ${HeightAni} 1s 1;`}
    
    div[id=text] {
        font-size: calc(${prop=>`${prop.$height}px * ${prop.$fontratio}`});
        --font-size-from: calc(${prop=>`${prop.$from[0]}px * ${prop.$from[1]}`});
        @media screen and (max-width: 500px) {
            font-size: calc(${prop=>`${prop.$height} * 100vw / 500 * ${prop.$fontratio}`});
            --font-size-from: calc(${prop=>`${prop.$from[0]} * 100vw / 500 * ${prop.$from[1]}`});
        }
       ${css`animation: ${FontAni} 1s 1;`}
    }

    > div:has(img) {
        ${prop=>prop.$center ? `
            transform: translate(-50%, -50%);
            left: 50%;
        `: `
            transform: translateY(-50%);
            left: 40px;
            @media screen and (max-width: 500px) {
                left: calc(40 * 100vw / 500);
            }
        `}
        ${prop=>prop.$from[2] ? `
            --transform-from: translate(-50%, -50%);
            --left-from: 50%;
        `: `
            --transform-from: translateY(-50%);
            --left-from: 40px;
            @media screen and (max-width: 500px) {
                --left-from: calc(40 * 100vw / 500);
            }
        `}
        ${css`animation: ${TransformAni} 1s 1;`}
    }
`

const Banner = styled.div`
    height: 60%;
    width: 100vw;
    background: #000000;
`

const Frame = styled.div`
    background: #313338;
    border-radius: 50%;
    height: 70%;
    aspect-ratio: 1;
    
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
`

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    cursor: pointer;
    color: rgba(255,255,255,0);
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: rgba(255,255,255,1);
            > img {
                filter: brightness(0.5);
            }
        }
    }
    
    > img {
        filter: brightness(1.0);
        border-radius: 50%;
    }
`

const Image = styled.img`
    width: 80%;
    height: 80%;
`

const GitView = styled.div`
    position: absolute;
    font-family: DM Sans;

    font-style: normal;
    font-weight: 600;
`
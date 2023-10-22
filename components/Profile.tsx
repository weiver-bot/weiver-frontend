import { styled } from "styled-components";
import { useEffect, useState } from 'react';
import GetState from "@/api/state/get";
import { useRecoilValue } from "recoil";
import { DoCardReload } from "./Card/Reload";

export default function Profile() {
    const [state, setState] = useState("online");

    const reload = useRecoilValue(DoCardReload);
    
    useEffect(() => {
        GetState().catch(()=>{
            setState("offline");
        })
    }, [reload]);

    return (
        <>
        <Container>
            <Banner />
            <Image src="/bot/frame.svg" alt="frame" $size={210} />
            <Image src="/bot/profile.png" alt="profile" $size={170} $isProfile={true} />
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

const Image = styled.img<{
    $size: number;
    $isProfile?: boolean;
}>`
    width: ${prop=>prop.$size}px;
    height: ${prop=>prop.$size}px;

    @media screen and (max-width: 500px) {
        width: calc(${prop=>prop.$size} * 100vw / 500);
        height: calc(${prop=>prop.$size} * 100vw / 500);
    }
    ${prop=>prop.$isProfile ? `border-radius:50%`: ""}
`

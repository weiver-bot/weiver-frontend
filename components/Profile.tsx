import { styled } from "styled-components";

export default function Profile(prop: {
    state: string
}) {
    return (
        <>
        <Container>
            <Banner />
            <Image src="/bot/frame.svg" alt="frame" $size={210}/>
            <Image src="/bot/profile.png" alt="profile" $size={170}/>
            <Wrapper $left={60} $top={60}>
                <Image src={`/bot/state/${prop.state}.svg`} alt={prop.state} $size={60}/>
            </Wrapper>
        </Container>
        </>
    );
}

const Container = styled.div`
    > img {
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
}>`
    width: ${prop=>prop.$size}px;
    height: ${prop=>prop.$size}px;

    @media screen and (max-width: 500px) {
        width: calc(${prop=>prop.$size} * 100vw / 500);
        height: calc(${prop=>prop.$size} * 100vw / 500);
    }
`
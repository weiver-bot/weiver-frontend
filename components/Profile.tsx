import { styled } from "styled-components";

export default function Profile(prop: {
    state: string
}) {
    return (
        <>
        <Containter>
            <Wrapper $left={115} $top={82}>
                <Image src="/bot/frame.svg" alt="frame" width={210} height={210}/>
            </Wrapper>
            <Wrapper $left={-75} $top={102}>
                <Image src="/bot/profile.png" alt="profile" width={170} height={170}/>
            </Wrapper>
            <Wrapper $left={-135} $top={222}>
                <Image src={`/bot/state/${prop.state}.svg`} alt={prop.state} width={60} height={60}/>
            </Wrapper>
        </Containter>
        </>
    );
}

const Containter = styled.div`
    height: 187px;
    width: 100%;
    background: #000000;
    
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: nowrap;
`;

const Wrapper = styled.div<{
    $top: number;
    $left: number;
}>`
    position:relative;
    top: ${prop=>prop.$top}px;
    left: ${prop=>prop.$left}px;

    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
`

const Image = styled.img``
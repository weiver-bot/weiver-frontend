import styled from "styled-components";

export default function BotState(prop: {
    online: boolean;
    animation: boolean;
}) {
    return (
        <>
        <Wrapper>
            <Frame>
                <Offline/>
                {prop.online && <Online $animation={prop.animation}/>}
            </Frame>
        </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    position: absolute;
    height: 100%;
    aspect-ratio: 1;

    padding: 7%;
    
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    pointer-events: none;
`

const Frame = styled.div`
    width: 35%;
    height: 35%;
    background: #313338;
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
`

const Online = styled.div<{
    $animation: boolean;
}>`
    width: 62%;
    height: 62%;
    background: #23A55A;
    border-radius: 50%;
    z-index: 2;
    
    ${prop=>prop.$animation && "animation: fadeIn 1s 1;"}
`

const Offline = styled.div`
    position: absolute;
    width: 62%;
    height: 62%;
    background: #80848E;
    border-radius: 50%;
    &::before {
        content: "";
        position: absolute;
        top: 30%;
        bottom: 30%;
        left: 30%;
        right: 30%;
        background: #313338;
        border-radius: 50%;
    }
`
import styled from "styled-components";

export default function BotState(prop: {
    online: boolean;
}) {
    return (
        <>
        <Wrapper>
            <Frame>
                {prop.online ? <Online/>:<Offline/>}
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
    
    * {
        animation: fadeIn 1s 1;
    }
`

const Online = styled.div`
    width: 62%;
    height: 62%;
    background: #23A55A;
    border-radius: 50%;
`

const Offline = styled.div`
    width: 62%;
    height: 62%;
    background: #80848E;
    border-radius: 50%;
    &::before {
        content: "";
        position: absolute;
        top: 35%;
        bottom: 35%;
        left: 35%;
        right: 35%;
        background: #313338;
        border-radius: 50%;
    }
`
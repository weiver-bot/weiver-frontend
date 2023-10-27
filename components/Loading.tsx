import { styled } from "styled-components";

export default function Loading() {
    
  return (
    <>
    <Container>
        <Spinner/>
    </Container>
    </>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Spinner = styled.div`
    min-width: 40px;
    min-height: 40px;
    border: 5px solid rgba(255,255,255,0);
    border-right: 5px solid #515CD9;
    border-top: 5px solid #515CD9;
    border-radius: 50%;

    animation: spin 650ms infinite;
`
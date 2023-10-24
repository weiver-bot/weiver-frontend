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

    --speed: 650ms;
    
    -webkit-animation-name: spin;
    -webkit-animation-duration: var(--speed);
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: var(--speed);
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: var(--speed);
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
    
    animation-name: spin;
    animation-duration: var(--speed);
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @-ms-keyframes spin {
        from { -ms-transform: rotate(0deg); }
        to { -ms-transform: rotate(360deg); }
    }
    @-moz-keyframes spin {
        from { -moz-transform: rotate(0deg); }
        to { -moz-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
        from { -webkit-transform: rotate(0deg); }
        to { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`
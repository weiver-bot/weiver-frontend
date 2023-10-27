import { styled } from "styled-components";

export default function CardInfo(prop: { 
    name: string;
    id: string;
    comment: string;
}) {
  return (
    <>
    <Container>
      <Name>{prop.name}</Name>
      <SecondRow>
        <ID>{prop.id}</ID>
        <Svg width="54" height="28" viewBox="0 0 54 28" fill="none">
          <rect x="0.128387" width="53" height="28" rx="5" fill="#5865F2"/>
          <path d="M9.96665 21V8.4H15.0246C16.3326 8.4 17.3286 8.706 18.0126 9.318C18.7086 9.918 19.0566 10.692 19.0566 11.64C19.0566 12.432 18.8406 13.068 18.4086 13.548C17.9886 14.016 17.4726 14.334 16.8606 14.502C17.5806 14.646 18.1746 15.006 18.6426 15.582C19.1106 16.146 19.3446 16.806 19.3446 17.562C19.3446 18.558 18.9846 19.38 18.2646 20.028C17.5446 20.676 16.5246 21 15.2046 21H9.96665ZM12.2706 13.692H14.6826C15.3306 13.692 15.8286 13.542 16.1766 13.242C16.5246 12.942 16.6986 12.516 16.6986 11.964C16.6986 11.436 16.5246 11.022 16.1766 10.722C15.8406 10.41 15.3306 10.254 14.6466 10.254H12.2706V13.692ZM12.2706 19.128H14.8446C15.5286 19.128 16.0566 18.972 16.4286 18.66C16.8126 18.336 17.0046 17.886 17.0046 17.31C17.0046 16.722 16.8066 16.26 16.4106 15.924C16.0146 15.588 15.4806 15.42 14.8086 15.42H12.2706V19.128ZM27.2261 21.216C25.9661 21.216 24.8621 20.94 23.9141 20.388C22.9781 19.836 22.2401 19.074 21.7001 18.102C21.1721 17.118 20.9081 15.984 20.9081 14.7C20.9081 13.416 21.1721 12.288 21.7001 11.316C22.2401 10.332 22.9781 9.564 23.9141 9.012C24.8621 8.46 25.9661 8.184 27.2261 8.184C28.4741 8.184 29.5721 8.46 30.5201 9.012C31.4681 9.564 32.2061 10.332 32.7341 11.316C33.2621 12.288 33.5261 13.416 33.5261 14.7C33.5261 15.984 33.2621 17.118 32.7341 18.102C32.2061 19.074 31.4681 19.836 30.5201 20.388C29.5721 20.94 28.4741 21.216 27.2261 21.216ZM27.2261 19.146C28.4261 19.146 29.3801 18.75 30.0881 17.958C30.8081 17.166 31.1681 16.08 31.1681 14.7C31.1681 13.32 30.8081 12.234 30.0881 11.442C29.3801 10.65 28.4261 10.254 27.2261 10.254C26.0261 10.254 25.0661 10.65 24.3461 11.442C23.6261 12.234 23.2661 13.32 23.2661 14.7C23.2661 16.08 23.6261 17.166 24.3461 17.958C25.0661 18.75 26.0261 19.146 27.2261 19.146ZM38.0374 21V10.254H34.3654V8.4H44.0314V10.254H40.3414V21H38.0374Z" fill="white"/>
        </Svg>
      </SecondRow>
      <Comment>{prop.comment}</Comment>
    </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 0 0 5px 0;

  color: #FFFFFF;
  font-family: DM Sans;
  white-space: nowrap;
  
  @media screen and (max-width: 500px) {
    padding: 0 0 calc(5 * 100vw / 500) 0;
  }

  div {
    font-size: calc(var(--font-size) * 1px);
    @media screen and (max-width: 500px) {
      font-size: calc(var(--font-size) * 100vw / 500);
    }
  }
  * {
    top: calc(var(--top) * 1px);
    @media screen and (max-width: 500px) {
      top: calc(var(--top) * 100vw / 500);
    }
  }
`

const SecondRow = styled.div`
  display:flex;

  position:relative;
  --top:-42;
`

const Name = styled.div`
  --font-size: 50;
  font-weight: 1000;
  
  position:relative;
  --top:-22;
`

const ID = styled.div`
  --font-size: 32;
  font-weight: 700;
  
  --top: 0;
`

const Svg = styled.svg`
  position:relative;
  --top: 13.5;
  left: 7px;
  width: 50px;
  height: 25px;
  
  @media screen and (max-width: 500px) {
    width: calc(50 * 100vw / 500);
    height: calc(25 * 100vw / 500);
    left: calc(7 * 100vw / 500);
  }
`

const Comment = styled.div`
  --font-size: 30;
  font-weight: 200;

  position:relative;
  --top: -12;
`

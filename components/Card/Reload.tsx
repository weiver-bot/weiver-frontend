import { styled } from "styled-components";

export default function CardReload(prop: {
  handler: () => any;
}) {
  return (
    <>
    <Wrapper onClick={prop.handler}>
        <Image src="/reload.svg" alt="reload" $size={35}/>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: #232428;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  
  transform: translateX(-100%);
  position:absolute;
  top: 332.5px;
  left: calc(95% - 47px);

  @media screen and (max-width: 500px) {
    height: calc(45 * 100vw / 500);
    width: calc(45 * 100vw / 500);
    border-radius: calc(10 * 100vw / 500);
    top: calc(332.5 * 100vw / 500);
    left: calc(95% - 47 * 100vw / 500);
  }

  &:hover {
    background-color: #424348;
  }
  &:active {
    background-color: #55585E;
  }
  transition: all ease 0.2s 0s;
`

const Image = styled.img<{
    $size: number;
}>`
    width: ${prop=>prop.$size}px;
    height: ${prop=>prop.$size}px;
    
    @media screen and (max-width: 800px) {
        width: calc(${prop=>prop.$size} * 100vw / 800);
        height: calc(${prop=>prop.$size} * 100vw / 800);
    }
`
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import CheckBox from "../CheckBox";

export default function Selector(prop: {
    children?: [string, (e: number)=>any][];
    select: number;
    router: any;
}) {
  const [press, setPress] = useState(false); 

  useEffect(()=>{
    setPress(false);
  }, [prop.router.query]);

  const boxRef = useRef<HTMLDivElement|null>(null);
  const buttonRef = useRef<HTMLDivElement|null>(null);
  
  useEffect(() => {
    const handleOutsideClose = (e: {target: any}) => {
      if(press && !boxRef.current?.contains(e.target) && !buttonRef.current?.contains(e.target)) setPress(false);
    };
    document.addEventListener('click', handleOutsideClose);
    
    return () => document.removeEventListener('click', handleOutsideClose);
  }, [press]);

  return (
    <>
      <Wrapper>
        <Button $pressed={press} onClick={()=>setPress(!press)} ref={buttonRef}>
          <Image src="/filter.svg" alt="filter"/>
        </Button>
        {press && (
          <Box ref={boxRef}>
          {prop.children?.map((v, i) => (
            <List key={v[0]} onClick={()=>{v[1](i)}}>
              <Title key={v[0]}>{v[0]}</Title>
              <CheckBoxWrapper>
                <CheckBox check={i == prop.select} size={17}/>
              </CheckBoxWrapper>
            </List>
          ))}
          </Box>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2.5px 0 0 0;
`

const Button = styled.div<{
  $pressed: boolean;
}>`
  width: 30px;
  aspect-ratio:1;
  
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background: #313338;
  
  ${prop=>prop.$pressed ? `
    filter: brightness(150%);
  `:`
    filter: brightness(100%);
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        filter: brightness(130%);
      }
    }
  `}
    
  transition: all ease 0.2s 0s;

  @media screen and (max-width: 500px) {
    width: calc(30 * 100vw / 500);
  }
`

const Image = styled.img`
  width: 16px;
  aspect-ratio:1;

  @media screen and (max-width: 500px) {
    width: calc(16 * 100vw / 500);
  }
`

const Box = styled.div`
  position: absolute;
  top: 55px;
  
  cursor: default;

  --padding: 5px;
  padding: var(--padding);
  border-radius: var(--padding);

  background: #111214;
  z-index: 1;

  display: flex;
  flex-direction: column;

  --shadow: 5px;
  box-shadow: 0 var(--shadow) calc(var(--shadow) * 2) rgba(0,0,0,0.5);

  @media screen and (max-width: 500px) {
    top: calc(55 * 100vw / 500);
    --padding: calc(5 * 100vw / 500);
    --shadow: calc(8 * 100vw / 500);
  }
`

const List = styled.div`
  height: 30px;

  display: flex;
  align-items: center;

  padding: 0 0px 0px 5px;
  border-radius: 2px;
  
  @media screen and (max-width: 500px) {
    height: calc(30 * 100vw / 500);
    padding: 0 0px 0px calc(5 * 100vw / 500);
  }

  #box {
    color: #4752C4;
  }
  #check {
    color: #FFFFFF;
  }
  
  cursor: pointer;

  filter: brightness(100%);
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #373F97;
      color: #373F97;
      #box {
        color: #B6B6B6;
      }
      #check {
        color: #4752C4;
      }
      filter: brightness(140%);
    }
  }
`

const Title = styled.div`
  color: #B5BAC1;
  font-family: DM Sans;
  white-space: nowrap;

  font-size: 10pt;
  font-style: normal;
  font-weight: 600;
  
  @media screen and (max-width: 500px) {
    font-size: calc(10 * 100vw / 350);
  }
`

const CheckBoxWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 3px 0px 15px;
  @media screen and (max-width: 500px) {
    padding: 0 calc(3 * 100vw / 500) 0px calc(15 * 100vw / 500);
  }
`
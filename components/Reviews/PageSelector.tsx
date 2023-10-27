import { styled } from "styled-components";
import { KeyboardEventHandler, useRef, useState } from "react";

export default function PageSelector(prop: {
  page: number;
  limit: number;
  handler: (e: number) => any;
}) {
  const limit = prop.limit, page = prop.page;

  var list: number[];
  if ( limit < 5) {
    list = [1, 2, 3, 4, 5].splice(0, limit);
  } else {
    list = [1, -1, page, -2,limit];
    if (page <= 3)        list = [1, 2, 3, list[3], list[4]];
    if (page > limit - 3) list = [list[0], list[1], limit - 2, limit - 1, limit];
  }

  const handler = (e: number) => {
    if (e < 1 || limit < e || e == page) return;
    prop.handler(e);
  }
  return (
    <>
    <Container>
      {limit != 1 ? <Button onClick={()=>handler(page-1)} $notAllow={page==1}>&lt;</Button> : ''}
      {list?.map((e) => {
        if (e < 1) return <InputButton key={`${page}#${e}`} handler={handler}/>;
        if (e > 0) return <Button key={`${page}#${e}`} $selected={e == page} onClick={()=>handler(e)}>{e}</Button>
      })}
      {limit != 1 ? <Button onClick={()=>handler(page+1) } $notAllow={page==limit}>&gt;</Button> : ''}
    </Container>
    </>
  )
}

const Container = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 500px) {
    padding: calc(20 * 100vw / 500) 0 0 0;
  }
  * {
    margin: calc(var(--margin) * 1px);
    @media screen and (max-width: 500px) {
      margin: calc(var(--margin) * 100vw / 500);
    }
  }
`

function InputButton(prop: {
  handler: (e: number)=>any;
}) {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  if (focus) {
    const onKeyDown: KeyboardEventHandler = (k) => {
      if (k.key === 'Enter') {
        prop.handler(Number((inputRef.current as HTMLInputElement).value));
        setFocus(false);
      }
    };
    return (
      <Input
        type="number"
        onBlur={()=>setFocus(false)} 
        onKeyDown={onKeyDown}
        ref={inputRef}
        autoFocus
      />
    )
  } else {
    return <Button onClick={()=>setFocus(true)}>...</Button>
  }
}

const Input = styled.input`
  width: 50px;
  height: 25px;
  border-radius: 5px;
  --margin: 4;

  font-size: 8pt;
  color: #FFFFFF;

  background: #1E1F22;
  outline: none;

  padding: 7px;
  
  @media screen and (max-width: 500px) {
    width: calc(50 * 100vw / 500);
    height: calc(25 * 100vw / 500);
    border-radius: calc(5 * 100vw / 375);
  
    font-size: calc(8 * 100vw / 375);
    
    padding: calc(7 * 100vw / 500);
  }
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`

const Button = styled.div<{
  $selected?: boolean;
  $notAllow?: boolean;
}>`
  --size: 30px;
  min-width: var(--size);
  min-height: var(--size);
  border-radius: calc(var(--size) / 2);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #FFFFFF;
  font-family: DM Mono;
  white-space: wrap;

  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  ${prop=>prop.$selected ? 
    `background: #5865F2;
    --hover-background: #5865F2;
    font-weight: 700;` : 
    `--hover-background: #232428;`
  }
  --margin: ${prop=>prop.$selected ? `8`:`0`};
  
  cursor: pointer;
  ${prop=>prop.$notAllow ? 
    `cursor: not-allowed; 
    color: #8F9093;` : `
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: var(--hover-background); 
      }
    }`
  }

  @media screen and (max-width: 500px) {
    --size: calc(30 * 100vw / 500);
    font-size: calc(13 * 100vw / 375);
  }
`

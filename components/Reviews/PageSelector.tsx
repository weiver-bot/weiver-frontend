import { styled } from "styled-components";
import { useState } from "react";

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
    if (e < 1 || prop.limit < e || e == prop.page) return;
    prop.handler(e);
  }
  return (
    <>
    <Container>
    {prop.limit != 1 ? <Button onClick={()=>handler(prop.page-1)} $notAllow={prop.page==1}>&lt;</Button> : <Button/>}
    {list?.map((e) => {
      if (e < 1) return <InputButton key={`${prop.page}#${e}`}/>;
      if (e > 0) return <Button key={`${prop.page}#${e}`} $selected={e == prop.page} onClick={()=>handler(e)}>{e}</Button>
    })}
    {prop.limit != 1 ? <Button onClick={()=>handler(prop.page+1)} $notAllow={prop.page==prop.limit}>&gt;</Button> : <Button/>}
    </Container>
    </>
  )
}

const Container = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

function InputButton() {
  const [focus, setFocus] = useState(false);

  if (focus) {
    return (
      <form method="get">
        <Input
          type="text"
          id="page"
          name="page"
          onBlur={()=>setFocus(false)}
          autoFocus
        />
      </form>
    )
  } else {
    return <Button onClick={()=>setFocus(true)}>...</Button>
  }
}

const Input = styled.input`
  width: 50px;
  height: 25px;

  font-size: 13pt;
  color: #FFFFFF;

  background-color: #1E1F22;
  outline: none;

  padding: 7px;
`

const Button = styled.div<{
  $selected?: boolean;
  $notAllow?: boolean;
}>`
  --size: 30px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #FFFFFF;
  font-family: DM Mono;
  white-space: wrap;

  font-size: 13pt;
  font-style: normal;
  font-weight: 500;
  ${prop=>prop.$selected ? 
    "background: #5865F2;" : 
    `&:hover { 
      background: #232428; 
    }`
  }
  
  cursor: pointer;
  ${prop=>prop.$notAllow ? 
    `cursor: not-allowed; 
    color: #8F9093;` : ""
  }
`

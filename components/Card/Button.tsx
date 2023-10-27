import { styled } from "styled-components";

export default function CardButton(prop: {
  text: string;
  handler: () => any;
}) {
  return (
    <>
    <Wrapper onClick={prop.handler}>
      <Text>{prop.text}</Text>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 55px;
  border-radius: 5px;
  background: #4E5058;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #6D6F78;
    }
  }
  &:active {
    background: #80848E;
  }
  transition: all ease 0.2s 0s;

  @media screen and (max-width: 700px) {
    height: calc(55 * 100vw / 700);
    border-radius: calc(5 * 100vw / 500);
  }
`

const Text = styled.div`
  color: #FFFFFF;
  font-family: DM Sans;
  white-space: nowrap;

  font-size: 18pt;
  font-style: normal;
  font-weight: 600;
  
  @media screen and (max-width: 700px) {
    font-size: calc(18 * 100vw / 525);
  }
`
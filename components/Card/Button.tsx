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
  height: 71px;
  border-radius: 10px;
  background-color: #4E5058;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: #6D6F78;
    }
  }
  &:active {
    background-color: #80848E;
  }
  transition: all ease 0.2s 0s;

  @media screen and (max-width: 800px) {
    height: calc(71 * 100vw / 800);
    border-radius: calc(10 * 100vw / 500);
  }
`

const Text = styled.div`
  color: #FFFFFF;
  font-family: DM Sans;
  white-space: nowrap;

  font-size: 20pt;
  font-style: normal;
  font-weight: 700;
  
  @media screen and (max-width: 800px) {
    font-size: calc(20 * 100vw / 600);
  }
`
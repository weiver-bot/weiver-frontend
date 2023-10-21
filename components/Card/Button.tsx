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

const Wrapper = styled.button`
  width: 48%;
  height: 71px;
  border-radius: 10px;
  background-color: #4E5058;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #6D6F78;
  }
  &:active {
    background-color: #80848E;
  }
  transition: all ease 0.2s 0s;
`

const Text = styled.div`
  color: #FFFFFF;
  font-family: DM Sans;
  white-space: nowrap;

  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`
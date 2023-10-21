import { styled } from "styled-components";

const Interval = styled.div<{ $amount: number }>`
    flex-shrink: 0;
    width: ${prop=>prop.$amount}px;
`

export default Interval
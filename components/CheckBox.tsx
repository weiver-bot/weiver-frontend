import { styled } from "styled-components";

export default function CheckBox(prop: {
    check: boolean;
    size: number;
}) {
    
  return (
    <>
    <Container $size={prop.size}>
        {prop.check ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect id="box" width="24" height="24" rx="2.4" fill="currentColor"/>
                <line id="check" y1="-1.5" x2="7.52557" y2="-1.5" transform="matrix(0.612067 0.790806 -0.762201 0.647341 3 12.6201)" stroke="currentColor" strokeWidth="2.5"/>
                <line id="check" y1="-1.5" x2="17.5015" y2="-1.5" transform="matrix(-0.770489 0.637453 -0.602021 -0.79848 20 6)" stroke="currentColor" strokeWidth="2.5"/>
            </svg>
        ): (
            <svg width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" rx="2.4" fill="#B5BAC1"/>
                <rect x="3" y="3" width="18" height="18" rx="1.8" opacity="1" fill="currentColor"/>
            </svg>
        )}
    </Container>
    </>
  )
}

const Container = styled.div<{
    $size: number;
}>`
    width: ${prop=>prop.$size}px;
    aspect-ratio:1;

    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 500px) {
        width: calc(${prop=>prop.$size} * 100vw / 500);
    }
`


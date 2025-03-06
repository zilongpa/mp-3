import {styled} from "styled-components";
import {ReactNode} from "react";

const StyledH4 = styled.h4`
    margin-bottom: 0.5vh;
`
export default function Subtitle(props: { children: ReactNode }) {
    return <StyledH4>{props.children}</StyledH4>;
}
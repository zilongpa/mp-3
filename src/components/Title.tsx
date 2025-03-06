import {styled} from "styled-components";
import {ReactNode} from "react";

const StyledH2 = styled.h2`
    margin-bottom: 2vw;
    text-align: center;
`
export default function Title(props: { children: ReactNode }) {
    return <StyledH2>{props.children}</StyledH2>;
}
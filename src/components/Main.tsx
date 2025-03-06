import {styled} from "styled-components"
import {ReactNode} from "react";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    border-radius: 1vw;
    background: #f4f7fe;
    box-shadow: 2vw 2vw 6vw #bebebe, -2vw -2vw 6vw #ffffff;
    padding: 2vh 2vw;
    width: 100%;
    
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        margin-top: 1vh;
        width: auto;
    }
`

export default function Main(props : {children: ReactNode}) {
    return (
        <StyledMain>
            {props.children}
        </StyledMain>
    )
}
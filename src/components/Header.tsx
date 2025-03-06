import {styled} from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    border-radius: 1vw;
    background: #ffe0e0;
    box-shadow: 2vw 2vw 6vw #c5c5c5, -2vw -2vw 6vw #ffffff;
    margin: 1vh auto;
    
    @media screen and (max-width: 900px) {
        align-items: center;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <h1>Junhui Huang</h1>
            <p>My Online Resume</p>
        </StyledHeader>
    )
}
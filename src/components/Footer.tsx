import {styled} from "styled-components"
import {Link} from "react-router"

const StyledFooter = styled.footer`
    margin: 1vh auto;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 0.5em;
    background: #fffad2;
    border: 0.1vw solid #e8e8e8;
    box-shadow: 0.6vw 0.6vw 1.2vw #c5c5c5, -0.6vw -0.6vw 1.2vw #ffffff;
`

export default function Footer() {
    return (
        <StyledFooter>
            All Rights Reserved by Junhui Huang &nbsp;<Link to={`/credits`}>Credits</Link>
            &nbsp;&copy;
        </StyledFooter>
    )
}

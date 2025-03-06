import {Link} from "react-router"
import {styled} from "styled-components"

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0.5em 0;
`

const StyledNav = styled.nav`
    width: 35%;
    margin-right: 1vw;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    border-radius: 1vw;
    background: #e0e0e0;
    box-shadow: 2vw 2vw 6vw #bebebe, -2vw -2vw 6vw #ffffff;
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        padding-left: 0;
    }
`

const StyledLi = styled.li`
    //font-size: calc(3px + 3vw);
    width: 90%;
    padding: 0;
    margin: 2vh auto;
    color: #090909;
    border-radius: 1vw;
    background: #e8e8e8;
    border: 0.1vw solid #e8e8e8;
    box-shadow: 0.6vw 0.6vw 1.2vw #c5c5c5, -0.6vw -0.6vw 1.2vw #ffffff;
    &:hover {
        color: #666;
        box-shadow: inset 0.4vw 0.4vw 1.2vw #c5c5c5, inset -0.4vw -0.4vw 1.2vw #ffffff;
    }
    @media screen and (max-width: 900px) {
        //font-size: calc(2px + 2vw);
        margin: 0 .5%;
    }
`

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/education`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/experiences`}>Experiences</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/skills`}>Skills</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/contacts`}>Contacts</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}
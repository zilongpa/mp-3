import {styled} from "styled-components";
import profileImg from "../assets/profile.jpg";
import Title from "../components/Title";

const StyledImg = styled.img`
    max-width: 100%;
    background: #e0e0e0;
    box-shadow: 2vw 2vw 6vw #bebebe, -2vw -2vw 6vw #ffffff;
    @media screen and (max-width: 900px) {
        margin: 1vh auto;
    }
`

const StyledP = styled.p`
    margin: 0 1vw;
    @media screen and (max-width: 900px) {
        margin: 1vh 2vw;
    }
`

const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 900px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const TextContainer = styled.div`
    align-self: center;
    width: 60%;
    margin: 1vh 1vw;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

const ImageContainer = styled.div`
    width: 40%;
    margin: 1vh 1vw;
    @media screen and (max-width: 900px) {
        margin: 1vh auto;
    }
`

export default function Home() {
    return (
        <>
            <Title>Home</Title>
            <FlexContainer>
                <ImageContainer><StyledImg alt="Junhui Huang" src={profileImg}/></ImageContainer>
                <TextContainer>
                    <StyledP>
                        My name is Junhui Huang and you can call me Michael. I'm a proactive, project-oriented life-long
                        learner adept in programming, penetration testing, and neural network.
                        I'm currently pursuing a double major in Mathematics and Computer Science at Boston University
                        as a sophomore, expected to graduate in May 2027.
                    </StyledP>
                </TextContainer>
            </FlexContainer>
            <StyledP>
                Welcome to my website, here you will find my <strong><em><u>Educational</u></em></strong> and
                my <strong><em><u>Project</u></em></strong> history, as well as other information that might be of
                interest
                to you.
            </StyledP>
        </>
    )
}
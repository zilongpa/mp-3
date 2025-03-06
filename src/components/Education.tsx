import {styled} from "styled-components";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

const StyledUl = styled.ul`
    margin-bottom: 3vh;
`

export default function Education() {
    return (
        <>
            <Title>Education</Title>
            <Subtitle>Boston University</Subtitle>
            <StyledUl>
                <li>
                    Bachelor of Computer Science & Bachelor of Mathematics - 3.87
                    GPA
                </li>
                <li>
                    Database System, Computer System, Algorithm Analysis, Web App Development
                </li>
                <li>
                    Linear Algebra, Number Theory, Discrete Math, Multivariate
                    Calculus
                </li>
                <li>
                    Probability and Statistics
                </li>
                <li>
                    Data Science Tools and Applications
                </li>
                <li>
                    General Psychology
                </li>
                <li>
                    Introduction to Hospitality
                </li>
            </StyledUl>
            <Subtitle>Beijing Huijia Private School</Subtitle>
            <StyledUl>
                <li>International Baccalaureate Diploma Program</li>
                <li>
                    Computer Science: 7/7
                </li>
                <li>
                    Physics HL: 6/7
                </li>
                <li>
                    Mathematics Analysis and Approaches HL: 6/7
                </li>
                <li>
                    Psychology: 6/7
                </li>
            </StyledUl>
        </>
    )
}
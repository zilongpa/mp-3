import {styled} from "styled-components";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Calculator from "./Calculator.tsx";

const StyledUl = styled.ul`
    margin-bottom: 3vh;
`

export default function Projects() {
    return (
        <>
            <Title>Experiences</Title>
            <Subtitle><a href="https://www.bucssa.org/" target="_blank">BUCSSA Application Portal & Official Website</a></Subtitle>
            <StyledUl>
                <li>
                    As a vice president of the BUCSSA Technology Department, developed and
                    maintained a website with features including freshman orientation,
                    event registration, accounting and sponsorship management, and
                    real-time high-concurrency voting.
                </li>
                <li>
                    The main development was done using Flask and React, with SASS as
                    the CSS preprocessor. The high-concurrency components were
                    developed using Rust and the Tokio multi-threading framework,
                    while AWS MySQL was used for the database.
                </li>
            </StyledUl>
            <Subtitle>Interactive circuit playground</Subtitle>
            <StyledUl>
                <li>
                    Inspired by an open-source project called CircuitJS, implemented
                    in 3D game engine to make it less abstract for secondary school
                    students.
                </li>
                <li>
                    Created using Unreal Engine 4, the model was crafted with SketchUP
                    and Blender, with materials designed using Substance 3D.
                </li>
            </StyledUl>
            <Subtitle>Calculator (BU CS391)</Subtitle>
            <Calculator/>
        </>
    )
}
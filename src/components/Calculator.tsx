import {styled} from "styled-components"
import {useState} from "react";

const StyledDiv = styled.div`
    margin-top: 0.5vh;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1vh;
    background: #e8e8e8;
    border: 0.1vw solid #e8e8e8;
    box-shadow: 0.6vw 0.6vw 1.2vw #c5c5c5, -0.6vw -0.6vw 1.2vw #ffffff;
    padding: 2vh 2vw;
    animation: rainbow 5s infinite;

    @keyframes rainbow {
        0% {
            background-color: #ff0000;
        }
        14% {
            background-color: #ff7f00;
        }
        28% {
            background-color: #ffff00;
        }
        42% {
            background-color: #00ff00;
        }
        57% {
            background-color: #63ceff;
        }
        85% {
            background-color: #8b00ff;
        }
        100% {
            background-color: #ff0000;
        }
    }
`

const StyledSpan = styled.span<{ isNegative: boolean; }>`
    background-color: white;
    color: ${props => (props.isNegative ? 'red' : '')};
`

const StyledH3 = styled.h3`
    margin-top: 0.5vh;
`

function power(first: number, second: number): number {
    let n = 1;
    for (let i = 0; i < second; i++) {
        n = n * first;
    }
    return n;
}

export default function Calculator() {
    const [output, setOutput] = useState<number | null>(null);
    const [first, setFirst] = useState<string>("");
    const [second, setSecond] = useState<string>("");

    function clearAll(): void {
        setOutput(null);
        setFirst("");
        setSecond("");
    }

    return (
        <StyledDiv>
            <label>First Number: <input type="number" value={first} onChange={(e) => setFirst(e.target.value)}/></label>
            <br/>
            <label>Second Number: <input type="number" value={second}
                                         onChange={(e) => setSecond(e.target.value)}/></label>
            <br/>
            <button onClick={() => setOutput(Number(first) + Number(second))}>Add</button>
            <button onClick={() => setOutput(Number(first) - Number(second))}>Subtract</button>
            <button onClick={() => setOutput(Number(first) * Number(second))}>Multiply</button>
            <button onClick={() => setOutput(Number(first) / Number(second))}>Divide</button>
            <button onClick={() => setOutput(power(Number(first), Number(second)))}>Power</button>
            <button onClick={clearAll}>Clear</button>
            <br/>
            <StyledH3>Result: <StyledSpan isNegative={output != null && output < 0}>{output}</StyledSpan></StyledH3>
        </StyledDiv>
    )
}

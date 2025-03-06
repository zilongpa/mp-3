import {styled} from "styled-components";
import Title from "../components/Title";

const StyledTable = styled.table`
    border: 0.1rem solid black;
    margin-right: auto;
    margin-left: auto;
    line-height: 2;
`

const StyledTd = styled.td`
    border: 0.1rem solid black;
`

export default function Contacts() {
    return (
        <>
            <Title>Contacts</Title>
            <StyledTable>
                <tbody>
                <tr>
                    <StyledTd>Address</StyledTd>
                    <StyledTd>MA, Boston</StyledTd>
                </tr>
                <tr>
                    <StyledTd>Phone</StyledTd>
                    <StyledTd>+1 617-816-****</StyledTd>
                </tr>
                <tr>
                    <StyledTd>Phone</StyledTd>
                    <StyledTd>+86 186-***-****</StyledTd>
                </tr>
                <tr>
                    <StyledTd>Email</StyledTd>
                    <StyledTd><a href="mailto:hjh604@bu.edu">hjh604@bu.edu</a></StyledTd>
                </tr>
                <tr>
                    <StyledTd>LinkedIn</StyledTd>
                    <StyledTd><a href="https://www.linkedin.com/in/junhui-huang" target="_blank">linkedin.com/in/junhui-huang</a>
                    </StyledTd>
                </tr>
                <tr>
                    <StyledTd>Github</StyledTd>
                    <StyledTd><a href="https://github.com/zilongpa" target="_blank">github.com/zilongpa</a></StyledTd>
                </tr>
                <tr>
                    <StyledTd>HuggingFace</StyledTd>
                    <StyledTd><a href="https://huggingface.co/zilongpa" target="_blank">huggingface.co/zilongpa</a>
                    </StyledTd>
                </tr>
                <tr>
                    <StyledTd>Kaggle</StyledTd>
                    <StyledTd><a href="https://www.kaggle.com/hjh604" target="_blank">kaggle.com/hjh604</a></StyledTd>
                </tr>
                </tbody>
            </StyledTable>
        </>
    )
}
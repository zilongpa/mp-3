import {createBrowserRouter, RouterProvider, Routes, Route} from "react-router";
import {styled} from "styled-components";
import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import Credits from "./components/Credits.tsx";
import Home from "./components/Home.tsx";
import Education from "./components/Education.tsx";
import Experiences from "./components/Experiences.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import Contacts from "./components/Contacts.tsx";

const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

function Root() {
    return (
        <PageWrapper>
            <Header/>
            <Container>
                <Nav/>
                <Main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/education" element={<Education/>}/>
                        <Route path="/experiences" element={<Experiences/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/skills" element={<Skills/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/credits" element={<Credits/>}/>
                    </Routes>
                </Main>
            </Container>
            <Footer/>
        </PageWrapper>
    )
}

const router = createBrowserRouter([{
    path: '*', Component: Root
}])

export default function App() {
    return <RouterProvider router={router}/>
}

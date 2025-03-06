import {styled} from "styled-components";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

const StyledUl = styled.ul`
    margin-bottom: 3vh;
`

export default function Experiences() {
    return (
        <>
            <Title>Experiences</Title>
            <Subtitle>PetCare+ (WIP) - Head of Technology & Shareholder</Subtitle>
            <StyledUl>
                <li>
                    Architected and implemented a full-stack platform for pet care services, utilizing Rust (Axum) for
                    backend development, React Native for mobile applications, PostgreSQL for databases, and Redis
                    for caching, ensuring a scalable and high-performing system.
                </li>
                <li>
                    Deployed and managed a distributed microservices architecture, leveraging Kubernetes, Docker, and
                    DigitalOcean for load balancing, alongside OpenTelemetry and Jaeger for real-time telemetry and
                    performance monitoring.
                </li>
                <li>
                    Designed and delivered end-to-end features such as user onboarding, pet management, appointment
                    scheduling, real-time tracking, and payment systems, catering to both customers and service
                    providers with a seamless experience.
                </li>
            </StyledUl>
            <Subtitle>Chinasoft International - AI specialist</Subtitle>
            <StyledUl>
                <li>
                    Developed an intelligent energy equipment management system by
                    fine-tuning ChatGLM3, integrating multiple tools such as a SQL
                    query executor using LangChain. The system enables seamless
                    natural language management and control with a single RTX 4090
                    GPU.
                </li>
                <li>
                    Built an AI-powered resume ranking system for internal use by
                    fine-tuning and quantizing a Qwen2 base model. This solution
                    allows employees to rank hundreds of resumes within half an
                    hour using CPU inference, reducing the resume review process
                    from a week to just a few hours.
                </li>
            </StyledUl>
            <Subtitle>Beijing Huijia Private School - Software engineer</Subtitle>
            <StyledUl>
                <li>
                    Designed and implemented a virtual stock accounting system for
                    an economics course, utilizing Python, MySQL, and Electron.
                </li>
                <li>
                    Automated 90% of the manual calculations for student
                    volunteers, significantly enhancing accuracy, efficiency, and
                    reporting speed.
                </li>
            </StyledUl>
        </>
    )
}
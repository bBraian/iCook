import styled from "styled-components"
import { LargeButton } from "../../components/LargeButton"
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();

    function handleNavigateHome() {
        navigate('/')
    }
    return (
        <Container>
            <Title>Página não encontrada</Title>
            <Description>Oops! 😖 Essa página não foi encontrada em nosso servidor.</Description>
            <LargeButton text="Voltar para Home"  style={{width: '320px'}} onClick={handleNavigateHome} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: ${props => props.theme['primary-50']};
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
const Title = styled.h1`
    color: ${props => props.theme['white-0']};
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
`
const Description = styled.p`
    color: ${props => props.theme['white-0']};
    padding: 0 2rem;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
`
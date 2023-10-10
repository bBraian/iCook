import styled from "styled-components"
import { MastersCheffsCard } from "../MastersCheffsCard"

export function MastersCheffs() {
    return (
        <Container>
            <Title>Master's Cheffs</Title>
            <MastersCheffsList>
                <MastersCheffsCard />
            </MastersCheffsList>
        </Container>
    )
}

const Container = styled.section`
    margin-top: 1.5rem;
`

const Title = styled.h1`
    color: ${props => props.theme['neutral-90']};
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 16px;
`

const MastersCheffsList = styled.div`
    display: flex;
    gap: 1rem;
    overflow-y: scroll;
`
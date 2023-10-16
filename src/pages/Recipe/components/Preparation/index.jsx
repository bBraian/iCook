import styled from "styled-components"

export function Preparation() {
    return (
        <Container>
            <Row>
                <Title>Modo de preparo</Title>
                <Amount>40 min</Amount>
            </Row>

            <PreparationStep>
                <Step>
                    <Index>1</Index>
                    <StepDescription>Misture maionese, limão, mostarda, sal e pimenta em uma tigela média</StepDescription>
                </Step>
                <Step>
                    <Index>2</Index>
                    <StepDescription>Misture maionese, limão, mostarda, sal e pimenta em uma tigela média</StepDescription>
                </Step>
            </PreparationStep>
        </Container>
    )
}

export const Container = styled.div`
    margin-top: 1rem;
    margin-bottom: 2rem;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h1`
    color: ${props => props.theme['neutral-90']};
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
`

export const Amount = styled.span`
    color: ${props => props.theme['neutral-40']};
    font-size: 14px;
    font-weight: 400;
    line-height: 19.60px;
`

export const PreparationStep = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
`

export const Step = styled.div`
    width: 100%; 
    height: 100%; 
    padding-left: 18px; 
    padding-right: 18px; 
    padding-top: 20px; 
    padding-bottom: 20px; 
    background: #F1F1F1; 
    border-radius: 12px; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 14px; 
    display: inline-flex;
`

export const Index = styled.span`
    color: black;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.80px;
`

export const StepDescription = styled.span`
    color: black;
    font-size: 16px;
    font-weight: 400;
    line-height: 22.40px;
    word-wrap: break-word
`
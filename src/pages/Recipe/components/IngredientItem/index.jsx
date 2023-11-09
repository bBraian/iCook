import styled from "styled-components"

export function IngredientItem({ data }) {
    return (
        <Container>
            <Img src={data.image != undefined && data.image} />
            <Title>{data.name != undefined && data.name}</Title>
            <Amount>{data.amount != undefined && data.amount}</Amount>
        </Container>
    )
}

export const Container = styled.div`
    width: 100%;
    height: 110px;
    border-radius: 10px;
    background-color: ${props => props.theme['neutral-10']};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-bottom: 6px;
    object-fit: cover;
`

export const Title = styled.h2`
    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-weight: 600;
    line-height: 19.60px;
    word-wrap: break-word;
`

export const Amount = styled.span`
    color: ${props => props.theme['neutral-40']};
    font-size: 12px;
    font-weight: 400;
    word-wrap: break-word
`
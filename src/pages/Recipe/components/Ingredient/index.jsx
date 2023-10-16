import styled from "styled-components"
import { IngredientItem } from "../IngredientItem"

export function Ingredient() {
    return (
        <Container>
            <Row>
                <Title>Ingredientes</Title>
                <Amount>3 itens</Amount>
            </Row>

            <IngredientList>
                <IngredientItem />
                <IngredientItem />
                <IngredientItem />
                <IngredientItem />
                <IngredientItem />
            </IngredientList>
        </Container>
    )
}

export const Container = styled.div`
    margin-top: 1rem;
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

export const IngredientList = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem; */
`
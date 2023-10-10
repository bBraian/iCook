import styled from "styled-components"
import { RecentRecipesCard } from "../RecentRecipesCard"

export function RecentRecipes() {
    return (
        <Container>
            <Title>Receitas recentes</Title>
            <CategoryList>
                <Category selected={false}>Salada</Category>
                <Category selected={true}>Café</Category>
                <Category selected={false}>Aperitivo</Category>
                <Category selected={false}>Macarrao</Category>
            </CategoryList>
            <RecipesList>
                <RecentRecipesCard />
                <RecentRecipesCard />
                <RecentRecipesCard />
                <RecentRecipesCard />
            </RecipesList>
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

const CategoryList = styled.div`
    display: flex;
    gap: 6px;
    overflow-y: scroll;
    margin-bottom: 20px;
`

const Category = styled.button`
    color: ${props => props.selected ? props.theme['white-0'] : props.theme['primary-30']};
    background-color: ${props => props.selected ? props.theme['primary-50'] : props.theme['white-0']};
    font-size: 12px;
    font-weight: 600;
    padding: 0 27px;
    height: 36px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
`

const RecipesList = styled.div`
    display: flex;
    gap: 1rem;
    overflow-y: scroll;
`
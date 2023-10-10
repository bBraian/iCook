import styled from "styled-components"
import { RecentRecipesCard } from "../RecentRecipesCard"

export function RecentRecipes() {
    return (
        <Container>
            <Title></Title>
            <CategoryList>
                <Category>Salada</Category>
                <Category>Cafe</Category>
                <Category>Aperitivo</Category>
                <Category>Macarrao</Category>
            </CategoryList>
            <RecipesList>
                <RecentRecipesCard />
            </RecipesList>
        </Container>
    )
}

const Container = styled.section`

`

const Title = styled.h1`
    
`

const CategoryList = styled.div`
    
`

const Category = styled.button`
    
`

const RecipesList = styled.div`

`
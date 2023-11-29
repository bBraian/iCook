import styled from "styled-components"
import { RecentRecipesCard } from "../RecentRecipesCard"
import { useEffect, useState } from "react"
import { api } from "../../../../lib/axios"

const categories = [
    { id: 1, category: 'Salada' },
    { id: 2, category: 'Café' },
    { id: 3, category: 'Aperitivo' },
    { id: 4, category: 'Macarrao' },
]

export function RecentRecipes() {
    const [categorySelected, setCategorySelected] = useState(1)
    const [recipes, setRecipes] = useState([])
    const [filteredRecipes, setFilteredRecipes] = useState([])

    useEffect(() => {
        api.get('/recipe/all')
        .then(res => {
            setRecipes(res.data)
            console.log(res.data)
            setFilteredRecipes(res.data.filter(recipe => recipe.recipe_categories_id === 1))
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        setFilteredRecipes(recipes.filter(recipe => recipe.recipe_categories_id === categorySelected))
    }, [categorySelected])


    return (
        <Container>
            <Title>Receitas recentes</Title>
            <CategoryList>
                {categories.map(category => (
                    <Category 
                        selected={category.id === categorySelected}
                        key={category.id}
                        onClick={() => setCategorySelected(category.id)}
                    >
                        {category.category}
                    </Category>
                ))}
            </CategoryList>
            <RecipesList>
                {filteredRecipes.map(recipe => (
                    <RecentRecipesCard key={recipe.id} data={recipe} />
                ))}
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
    overflow-x: scroll;
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
    overflow-x: scroll;
`
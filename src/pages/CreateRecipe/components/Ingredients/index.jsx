import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";

export function Ingredients() {
    const [ingredientsList, setIngredientsList] = useState([{ id: 1, ingredient: { id: 1, name: '' }, amount: '0gr'}])
    console.log(ingredientsList)

    function addNewIngredient() {
        setIngredientsList([...ingredientsList, { id:ingredientsList.length + 1, ingredient: {id:0, name: ''}, amount: '0gr'}])
    }

    function removeIngredient(id) {
        const IngredientsWithoutDeletedOne = ingredientsList.filter(ingredient => ingredient.id != id)
        setIngredientsList(IngredientsWithoutDeletedOne)
    }

    
    function handleAmountChange(id, newAmount) {
        const updatedIngredients = ingredientsList.map(item => {
        if (item.id === id) {
            return { ...item, amount: newAmount };
        }
        return item;
        });
        setIngredientsList(updatedIngredients);
    };

    return (
        <Container>
            <Title>Ingredientes</Title>
            <IngredientsBox>
                {ingredientsList.map(ingredient => (
                    <Row key={ingredient.ingredient.id}>
                        <Ingredient>{ingredient.ingredient.name}</Ingredient>
                        <AmountInput value={ingredient.amount} onChange={(e) => handleAmountChange(ingredient.id, e.target.value)} placeholder="100gr"></AmountInput>
                        <DeleteIngredientButton onClick={() => removeIngredient(ingredient.id)}>
                            -
                        </DeleteIngredientButton>
                    </Row>
                ))}
   
            </IngredientsBox>
            <NewIngredientButton onClick={addNewIngredient}>
                <FaPlus style={{color: '#EE8B8B', width: '14px', height: '14px'}} />
                Novo ingrediente
            </NewIngredientButton>
        </Container>
    )
}

const Container = styled.section`
    margin-top: 1rem;
`

const Title = styled.h1`
    color: ${props => props.theme['neutral-100']};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`

const IngredientsBox = styled.div`
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`

const Ingredient = styled.button`
    border: 1px solid ${props => props.theme['neutral-20']};
    border-radius: 10px;
    height: 44px;
    padding: 8px 1rem;
    flex: 1;

    background-color: transparent;
    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`

const AmountInput = styled.input`
    text-align: center;
    border: 1px solid ${props => props.theme['neutral-20']};
    border-radius: 10px;
    height: 44px;
    padding: 8px 1rem;
    width: 115px;

    background-color: transparent;
    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`

const DeleteIngredientButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 9px;
`

const NewIngredientButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${props => props.theme['primary-50']};
    border: 1px solid ${props => props.theme['primary-50']};
    border-radius: 10px;
    background-color: transparent;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    line-height: 19.60px;
`

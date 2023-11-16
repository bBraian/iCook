import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";

export function Steps({stepsList, setStepsList}) {
    function addNewStep() {
        setStepsList([...stepsList, { id: stepsList[stepsList.length - 1].id + 1, text: ""}])
    }

    function removeStep(id) {
        if(stepsList.length > 1) {
            const IngredientsWithoutDeletedOne = stepsList.filter(ingredient => ingredient.id != id)
            setStepsList(IngredientsWithoutDeletedOne)
        }
    }

    function handleTextChange(id, newText) {
        const updatedSteps = stepsList.map(item => {
        if (item.id === id) {
            return { ...item, text: newText };
        }
        return item;
        });
        setStepsList(updatedSteps);
    };

    return (
        <Container>
            <Title>Modo de preparo</Title>
            <IngredientsBox>
                {stepsList.map(step => (
                    <Row key={step.id}>
                        <Ingredient placeholder={`Passo ${step.id}`} value={step.name} onChange={(e) => handleTextChange(step.id, e.target.value)} />
                        <DeleteIngredientButton onClick={() => removeStep(step.id)}>
                            -
                        </DeleteIngredientButton>
                    </Row>
                ))}
               
            </IngredientsBox>
            <NewIngredientButton onClick={addNewStep}>
                <FaPlus style={{color: '#EE8B8B', width: '14px', height: '14px'}} />
                Novo passo
            </NewIngredientButton>
        </Container>
    )
}

const Container = styled.section`
    margin-top: 1rem;
    margin-bottom: 2.5rem;
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

const Ingredient = styled.input`
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

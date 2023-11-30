import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai"
import { BiPlus } from "react-icons/bi"
import { LargeButton } from "../../LargeButton"
import { useEffect, useState } from "react"
import { IngredientsFilterModal } from "../IngredientsFilterModal"

export function FilterModal({setModalOpen, modalOpen, filter, setFilter}) {
    const [ingredientModalOpen, setIngredientModalOpen] = useState(false)
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        setIngredients(filter.ingredient)
    }, [filter])

    if(!modalOpen) {
        return ""
    }

    return (
        <>
            <Container>
                <Header>
                    <Box>
                        <Text>Filtros</Text>
                    </Box>
                    <CloseButton onClick={() => setModalOpen(false)}>
                        <AiOutlineClose style={{color: '#E23E3E', width: '22px', height: '22px'}} />
                    </CloseButton>
                </Header>
                <ServesCounterList>
                    <Group>
                        <FilterBox>
                            <Span>Categoria</Span>
                            <Select value={filter.category} onChange={(e) => setFilter({...filter, category: e.target.value})}>
                                <option value={0}>Selecione</option>
                                <option value={1}>Café</option>
                                <option value={2}>Salada</option>
                                <option value={3}>Doce</option>
                            </Select>
                        </FilterBox>
                        <FilterBox>
                            <Span>Tipo</Span>
                            <Select value={filter.type} onChange={(e) => setFilter({...filter, type: e.target.value})}>
                                <option value={0}>Selecione</option>
                                <option value={1}>Normal</option>
                                <option value={2}>Vegano</option>
                                <option value={3}>Vegetariano</option>
                            </Select>
                        </FilterBox>
                    </Group>
                    <Group>
                        <FilterBox>
                            <Span>Ingrediente</Span>
                            <AddIngredient onClick={() => setIngredientModalOpen(true)}>
                                <BiPlus style={{color: '#303030', width: '16px', height: '16px'}} />
                                Adicionar ingrediente
                            </AddIngredient>
                        </FilterBox>
                        <FilterBox>
                            <Span>Serve</Span>
                            <Select value={filter.serves} onChange={(e) => setFilter({...filter, serves: e.target.value})}>
                                <option value={0}>Selecione</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                            </Select>
                        </FilterBox>
                    </Group>
                    {ingredients.length > 0 && (
                        <Group>
                            <IngredientsList>
                                {ingredients.map(ingredient => (
                                    <Item key={ingredient.id} onClick={() => handleSelectIngredient(ingredient)}>
                                        <Img src={ingredient.image} />
                                        {ingredient.name}
                                    </Item>
                                ))}
                            </IngredientsList>
                        </Group>
                    )}
                    
                </ServesCounterList>
                <ButtonBox>
                    <LargeButton text="Aplicar" config="primary" type="button" />
                    <LargeButton 
                        text="Remover" 
                        config="secondary" 
                        type="button" 
                        style={{border: '1px solid #EE8B8B'}} 
                        onClick={() => setFilter({ category: '0', type: '0', ingredient: [], serves: '0' })} 
                    />
                </ButtonBox>
            </Container>
        <Overlay onClick={() => setModalOpen(false)} />
        <IngredientsFilterModal modalOpen={ingredientModalOpen} setModalOpen={setIngredientModalOpen} filter={filter} setFilter={setFilter} />
        </>

    )
}

const Container = styled.div`
    max-width: 700px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme['white-0']};
    width: 86%;
    z-index: 99;
    border-radius: 12px;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #D9D9D9;
    margin: 10px;
    border-radius: 12px;
    height: 42px;
    padding: 5px 8px;
`
const Box = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`
const Text = styled.span`
    color: var(--neutral-90, #303030);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-left: 4px;
`
const CloseButton = styled.button`
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    transition: ease-in-out 0.2s;
    &:hover {
        transform: scale(1.1);
    }
`
const ServesCounterList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    gap: 12px;
    padding: 0 8px 14px 8px;
`
const Overlay = styled.div`
    position: fixed;
    top: 76px;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 88;
`;

const Select = styled.select`
    border: 1px solid ${props => props.theme['neutral-20']};
    border-radius: 10px;
    height: 44px;
    padding: 8px 1rem;
    width: 100%;

    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`

const AddIngredient = styled.button`
    border: 1px solid ${props => props.theme['neutral-20']};
    background-color: ${props => props.theme['white-0']};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 10px;
    height: 44px;
    padding: 8px 1rem;
    width: 100%;

    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`

const Span = styled.span`
    color: ${props => props.theme['neutral-90']};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`

const FilterBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
`

const Group = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    gap: 10px;
`

const Img = styled.img`
    width: 34px;
    height: 34px;
    object-fit: contain;
`

const IngredientsList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 0 16px;
`
const Item = styled.div`
    background-color: #E8E8E8;
    border-radius: 12px;
    display: flex;
    gap: 4px;
    flex-direction: column;
    width: 110px;
    text-align: center;
    height: 85px;
    align-items: center;
    justify-content: center;
    padding: 5px 12px;
    transition: background-color ease-in-out 0.2s;

    color: var(--neutral-90, #303030);
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`
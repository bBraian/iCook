import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai"
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
const fakeIngredients = [
    { id: 1, name: "Pimenta", img: "https://static.vecteezy.com/system/resources/thumbnails/024/781/978/small/chili-illustration-icon-free-png.png"},
    { id: 2, name: "Sal", img: "https://cdn-icons-png.flaticon.com/512/526/526228.png"},
    { id: 3, name: "Alface", img: "https://images.squarespace-cdn.com/content/v1/5b8edfa12714e508f756f481/1543944726778-3R28J0BST06GRZCOF7UR/alface-crespa-verde-hidropo%CC%82nica.png?format=1000w"},
    { id: 4, name: "Tomate", img: "https://static.vecteezy.com/system/resources/previews/013/442/147/non_2x/tomatoes-on-a-transparent-background-free-png.png"},
    { id: 5, name: "Bacon", img: "https://i.pinimg.com/originals/99/52/01/995201e1c92ca9eced42364ed8a1892c.png"},
    { id: 6, name: "Pão", img: "https://cdn.pixabay.com/photo/2012/04/03/14/51/bread-25206_1280.png"},
];

export function IngredientsModal({setModalOpen, modalOpen, selected, setSelected}) {
    const [search, setSearch] = useState('')
    const [filteredIngredients, setFilteredIngredients] = useState({})
    const [ingredients, setIngredients] = useState({})
    console.log(ingredients)
    useEffect(() => {
        getIngredients()
    }, [])

    async function getIngredients() {
        const { data } = await api.get('ingredients/all')
        setIngredients(data)
    }

    function handleCloseModal() {
        setSelected({})
        setModalOpen(0)
        setSearch('')
    }

    useEffect(() => {
        if(search) {
            let filter = ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(search.toLowerCase()))
            setFilteredIngredients(filter.length > 0 ? filter : {})
        }
    }, [search])

    if(modalOpen == 0) {
        return ""
    }

    return (
        <>
            <Container>
                <Header>
                    <Text>Ingredients</Text>
                    <CloseButton onClick={handleCloseModal}>
                        <AiOutlineClose style={{color: '#E23E3E', width: '22px', height: '22px'}} />
                    </CloseButton>
                </Header>
                <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar ingrediente" />

                <IngredientsList>
                    {search ? (
                        <> 
                            {filteredIngredients.length > 0 ? (
                                <>
                                    {filteredIngredients.map(ingredient => (
                                        <Item key={ingredient.id} selected={selected.id == ingredient.id} onClick={() => setSelected(ingredient)}>
                                            <Img src={ingredient.image} />
                                            {ingredient.name}
                                        </Item>
                                    ))}
                                </>
                            ) : (
                                <>  
                                    <NotFound>Ingrediente não encontrado</NotFound>
                                    <CreateNewButton>
                                        <FaPlus style={{color: '#EE8B8B', width: '14px', height: '14px'}} />
                                        Criar novo ingrediente
                                    </CreateNewButton>
                                </>
                            )}
                         
                        </>
                       
                    ) : (
                        <>
                            {ingredients.map(ingredient => (
                                <Item key={ingredient.id} selected={selected.id == ingredient.id} onClick={() => setSelected(ingredient)}>
                                    <Img src={ingredient.image} />
                                    {ingredient.name}
                                </Item>
                            ))}
                        </>
                    )}
                    
                </IngredientsList>
            </Container>
            <Overlay onClick={handleCloseModal} />
        </>

    )
}

const Container = styled.div`
    max-width: 700px;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme['white-0']};
    width: 86%;
    z-index: 99;
    border-radius: 12px;
`

const SearchInput = styled.input`
    height: 44px;
    border-radius: 10px;
    padding: 0 16px;
    border: 1px solid #D9D9D9;
    margin: 3px 10px 0 10px;
`

const CreateNewButton = styled.button`
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
    width: fit-content;
    margin: 0 auto;
`

const Img = styled.img`
    width: 34px;
    height: 34px;
    object-fit: contain;
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
    padding: 5px 12px;
`
const Text = styled.span`
    color: var(--neutral-90, #303030);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`
const NotFound = styled.span`
    color: var(--neutral-40, #A9A9A9);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-top: 12px;
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
const IngredientsList = styled.div`
    overflow-x: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 15px 32px 22px 32px;
    height: 150px;
`
const Item = styled.div`
    background-color: ${props => props.selected ? '#C1C1C1' : '#F1F1F1'};
    border-radius: 12px;
    display: flex;
    gap: 4px;
    flex-direction: column;
    width: 80px;
    height: 85px;
    align-items: center;
    justify-content: center;
    padding: 5px 12px;
    transition: background-color ease-in-out 0.2s;

    &:hover {
        background-color: ${props => props.selected ? '#C1C1C1' : '#E8E8E8'};
    }

    color: var(--neutral-90, #303030);
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
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
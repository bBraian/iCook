import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai"
const categories = [
    {id: 1, name: 'Salada'},
    {id: 2, name: 'Café'},
    {id: 3, name: 'Aperitivo'},
    {id: 4, name: 'Macarrão'},
    {id: 5, name: 'Doce'}
];

export function CategoryModal({setModalOpen, modalOpen, categoryId, setCategoryId}) {

    if(!modalOpen) {
        return ""
    }

    return (
        <>
            <Container>
            <Header>
                <Box>
                    <Text>Categoria</Text>
                </Box>
                <CloseButton onClick={() => setModalOpen(false)}>
                    <AiOutlineClose style={{color: '#E23E3E', width: '22px', height: '22px'}} />
                </CloseButton>
            </Header>
            <ServesCounterList>
                {categories.map(category => (
                    <Item key={category.id} selected={categoryId.id == category.id} onClick={() => setCategoryId(category)}>{category.name}</Item>
                ))}
            </ServesCounterList>
        </Container>
        <Overlay onClick={() => setModalOpen(false)} />
        </>

    )
}

const Container = styled.div`
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
    padding: 5px 6px;
`
const Box = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`
const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme['white-0']};
    border-radius: 10px;
    width: 32px;
    height: 32px;
`
const Text = styled.span`
    color: var(--neutral-90, #303030);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
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
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    margin-bottom: 14px;
    gap: 5px;
    height: 150px;
`
const Item = styled.div`
    background-color: ${props => props.selected ? '#C1C1C1' : '#F1F1F1'};
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 5px 12px;
    transition: background-color ease-in-out 0.2s;

    &:hover {
        background-color: #E8E8E8;
    }

    color: var(--neutral-90, #303030);
    font-size: 16px;
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
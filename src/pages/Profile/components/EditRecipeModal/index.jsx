import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai"

export function EditRecipeModal({setModalOpen, modalOpen}) {

    if(!modalOpen) {
        return ""
    }

    return (
        <>
            <Container>
                <CloseButton onClick={() => setModalOpen(false)}>
                    <AiOutlineClose style={{color: '#E23E3E', width: '22px', height: '22px'}} />
                </CloseButton>
                <Description>Como fazer italiano Espaguete em casa</Description>
                <Buttons>
                    <LinkButton to="criar-receita">
                        Editar
                    </LinkButton>
                    <Button primary={true}>
                        Excluir
                    </Button>
                </Buttons>
            </Container>
            <Overlay onClick={() => setModalOpen(false)} />
        </>

    )
}

const LinkButton = styled.button`
    border-radius: 10px;
    width: 140px;
    height: 34px;

    color:#E23E3E;
    background-color: #FFF;
    border: 1px solid #E23E3E;
    font-size: 12px;
    font-weight: 600;
`
const Button = styled.button`
    border-radius: 10px;
    width: 140px;
    height: 34px;

    color: #FFF;
    background-color: #E23E3E;
    border: 1px solid #E23E3E;
    font-size: 12px;
    font-weight: 600;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 14px;
`
const Description = styled.span`
    padding: 0 22px;
    text-align: center;
    color: ${props => props.theme['neutral-90']};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`
const Container = styled.div`
    position: fixed;
    display: flex;
    gap: 25px;
    align-items: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme['white-0']};
    width: 86%;
    z-index: 99;
    border-radius: 12px;
    padding: 24px;
`
const CloseButton = styled.button`
    border: 0;
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: transparent;
    display: flex;
    align-items: center;
    transition: ease-in-out 0.2s;
    &:hover {
        transform: scale(1.1);
    }
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
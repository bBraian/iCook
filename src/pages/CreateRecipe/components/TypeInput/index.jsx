import { HiArrowRight } from "react-icons/hi2"
import styled from "styled-components"
import { TypeModal } from "../TypeModal"
import { useState } from "react"

export function TypeInput({typeId, setTypeId}) {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
            <Container onClick={() => setModalOpen(true)}>
                <Box style={{gap: '16px'}}>
                    <Text>Tipo</Text>
                </Box>
                <Box style={{gap: '8px'}}>
                    <Amount>{typeId.name}</Amount>
                    <HiArrowRight style={{color: '#000', width: '18px', height: '18px'}} />
                </Box>
            </Container>
            <TypeModal modalOpen={modalOpen} setModalOpen={setModalOpen} typeId={typeId} setTypeId={setTypeId} />
        </>
    )
}

const Container = styled.div`
    margin-top: 16px;
    width: 100%;
    height: 60px;
    background-color: #F1F1F1;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    border: 0;
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme['white-0']};
    border-radius: 10px;
    width: 36px;
    height: 36px;
`

const Text = styled.span`
    color: ${props => props.theme['neutral-90']};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`

const Amount = styled.span`
    color: ${props => props.theme['neutral-40']};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`
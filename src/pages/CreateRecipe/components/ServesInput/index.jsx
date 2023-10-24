import { BsFillPeopleFill } from "react-icons/bs"
import { HiArrowRight } from "react-icons/hi2"
import styled from "styled-components"

export function ServesInput({serves, ...rest}) {
    return (
        <Container {...rest}>
            <Box style={{gap: '16px'}}>
                <IconBox>
                    <BsFillPeopleFill style={{color: '#E23E3E', width: '18px', height: '18px'}} />
                </IconBox>
                <Text>Serve</Text>
            </Box>
            <Box style={{gap: '8px'}}>
                <Amount>{serves}</Amount>
                <HiArrowRight style={{color: '#000', width: '18px', height: '18px'}} />
            </Box>
        </Container>
    )
}

const Container = styled.button`
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
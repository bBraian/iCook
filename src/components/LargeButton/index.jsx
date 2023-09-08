import { styled } from "styled-components"
import { BsArrowRight } from "react-icons/bs"

const Button = styled.button`
    background-color: ${props => props.theme['primary-50']};
    border: 0;
    border-radius: 10px;
    padding: 1rem 2rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    transition: background ease-in-out 0.2s;

    &:hover {
        background-color: ${props => props.theme['primary-60']};
    }
`

const Text = styled.span`
    color: ${props => props.theme['white-0']};
    font-weight: 600;
    font-size: 1rem;
    line-height: 140%;
`

export function LargeButton() {
    return (
        <Button>
            <Text>Placeholder</Text>
            <BsArrowRight width={16} height={16} color="white" style={{stroke: 'white', strokeWidth: '1'}} />
        </Button>
    )
}
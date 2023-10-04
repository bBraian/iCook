import { styled } from "styled-components"

const Button = styled.button`
    background-color: ${(props) => props.config == 'primary' ? props.theme['primary-50'] : props.theme['white-0']};
    color: ${(props) => props.config == 'primary' ? props.theme['white-0'] : props.theme['primary-30']};
    border: 0;
    border-radius: 10px;
    padding: 8px 12px;
    display: flex;
    gap: 0.2rem;
    justify-content: center;
    align-items: center;
    transition: background ease-in-out 0.2s;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;

    &:hover {
        background-color: ${props => props.theme['primary-60']};
        color: ${props => props.theme['white-0']};
    }
`

export function SmallButton({text, icon, config, ...rest}) {
    return (
        <Button config={config} {...rest}>
            {icon && icon}
            {text}
        </Button>
    )
}
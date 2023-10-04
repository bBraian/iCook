import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        padding: 0 2rem;
    }
    padding: 0 4rem;
    justify-content: space-between;
    background-color: ${props => props.theme['primary-50']};
    height: 76px;
    width: 100%;
`

export const Title = styled.h1`
    color: ${props => props.theme['white-0']};
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
`

export const HeaderButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MenuButton = styled(HeaderButton)`
    display: none;
    @media (max-width: 768px) {
        display: flex;
    }
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        display: none;
    }
`
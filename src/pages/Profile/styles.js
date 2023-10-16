import styled from "styled-components";

export const Container = styled.div`
    padding: 0 1rem;
    margin-top: 88px;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

export const Button = styled.button`
    color: ${props => props.theme['primary-50']};
    border: 1px solid ${props => props.theme['primary-50']};
    border-radius: 10px;
    background-color: transparent;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    line-height: 19.60px;

`
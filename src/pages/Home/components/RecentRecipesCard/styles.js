import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    flex-direction: column;
    border: 0;
    background-color: transparent;
    width: 124px;
`

export const Img = styled.img`
    width: 124px;
    height: 124px;
    border-radius: 10px;
    object-fit: cover;
`

export const Box = styled.div`
    margin: 0 6px;
    display: flex;
    flex-direction: column;
    text-align: start;
`

export const Title = styled.h2`
    margin-top: 6px;
    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`

export const UserCreator = styled.p`
    margin-top: 4px;
    color: ${props => props.theme['neutral-40']};
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
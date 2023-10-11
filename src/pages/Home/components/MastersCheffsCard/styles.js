import styled from "styled-components";

export const Container = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
`

export const Box = styled.div`
    width: 170px;
    background-color: #F1F1F1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    margin-top: 45px;
    padding: 12px;
`

export const Img = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
`

export const Title = styled.h1`
    margin: 55px 2px 4px 2px;
    color: ${props => props.theme['neutral-92px']};
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`

export const RecipesCounter = styled.div`
    text-align: start;
    color: ${props => props.theme['neutral-90']};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Flex = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const Stars = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    justify-content: center;
    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`

export const ReviewsCounter = styled.div`
    color: ${props => props.theme['neutral-40']};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
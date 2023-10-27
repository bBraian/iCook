import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    padding: 0 1rem;
    margin-top: 92px;
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

export const LinkButton = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme['primary-50']};
    border: 1px solid ${props => props.theme['primary-50']};
    border-radius: 10px;
    background-color: transparent;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    line-height: 19.60px;
`

export const Button = styled.button`
    text-decoration: none;
    color: ${props => props.theme['primary-50']};
    border: 1px solid ${props => props.theme['primary-50']};
    border-radius: 10px;
    background-color: transparent;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    line-height: 19.60px;
`

export const CancelBtn = styled(LinkButton)`
    border: 1px solid ${props => props.theme['primary-50']};
    color: ${props => props.theme['white-0']};
    background-color: ${props => props.theme['primary-50']};
`

export const UsernameInput = styled.input`
    height: 44px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    padding: 0 16px;

    color: ${props => props.theme['neutral-90']};
    font-size: 16px;
`

export const DescriptionInput = styled.textarea`
    margin-top: 10px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    padding: 12px 16px;
    resize: none;
    color: #A9A9A9;
    font-size: 16px;
`

export const Username = styled.h1`
    color: ${props => props.theme['neutral-90']};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`

export const RecipeCounter = styled.span`
    color: ${props => props.theme['neutral-40']};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`

export const Description = styled.p`
    margin-top: 12px;
    color: ${props => props.theme['neutral-40']};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`

export const Divider = styled.div`
    margin: 14px 0;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme['neutral-20']};
`

export const RecipesContainer = styled.div`
    padding: 0 1rem;
`

export const ButtonsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.isMyProfile ? "space-between" : "flex-end"};
`

export const RecipesButton = styled.button`
    color: ${props => props.active == 's' ? props.theme['white-0'] : props.theme['primary-30']};
    border-radius: 10px;
    border: 0;
    background-color: ${props => props.active == 's' ? props.theme['primary-50'] : props.theme['white-0']};
    padding: 8px 30px;
    font-size: 14px;
    font-weight: 600;
    line-height: 19.60px;
    transition: background ease-in-out 0.2s;

    &:hover {
        background-color: ${props => props.theme['primary-60']};
        color: ${props => props.theme['white-0']};
    }
`

export const RecipesList = styled.div`
    margin-top: 16px;
    gap: 1rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 2rem;
`
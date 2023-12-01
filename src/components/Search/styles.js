import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 93px auto 17px auto;
    padding: 0 1rem;
    max-width: 600px;
    gap: 12px;
    background-color: ${props => props.theme['white-0']};
`

export const Input = styled.input`
    display: flex;
    flex: 1;
    height: 44px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 1px ${props => props.theme['neutral-20']} solid;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
    color: ${props => props.theme['neutral-60']};
    font-size: 14px;
    font-weight: 400;
    line-height: 19.60px;
    word-wrap: break-word;
`

export const SearchButton = styled.button`
    cursor: pointer;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${props => props.theme['primary-50']};
    border: 0;
    transition: background-color ease-in-out 0.2s;

    &:hover {
        background-color: ${props => props.theme['primary-60']};
    }
`

export const FilterButton = styled(SearchButton)`
    position: relative;
`

export const FilterCount = styled.div`
    width: 25px;
    height: 25px;
    background-color: #F3B2B2;
    color: #FFF;
    font-weight: 600;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10px;
    right: -10px;
`
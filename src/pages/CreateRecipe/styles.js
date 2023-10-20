import styled from "styled-components"

export const Container = styled.div`
    padding: 0 1rem;
    margin-top: 92px;
    margin-bottom: 2rem;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

export const Title = styled.div`
    color: ${props => props.theme['neutral-90']};
    font-size: 24px;
    font-weight: 600;
    line-height: 28.80px;
    word-wrap: break-word;
`

export const ImgContainer = styled.div`
    margin-top: 1rem;
    position: relative;
    display: 'flex';
    width: 100%;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const TitleInput = styled.input`
    margin-top: 20px;
    border: 1px solid ${props => props.theme['neutral-20']};
    border-radius: 10px;
    height: 44px;
    padding: 8px 1rem;
    width: 100%;

    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`

export const InputsBox = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

export const CookTimeBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const Span = styled.span`
    color: ${props => props.theme['neutral-90']};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`

export const InputTime = styled.input`
    border: 1px solid ${props => props.theme['neutral-20']};
    border-radius: 10px;
    height: 44px;
    padding: 8px 1rem;
    width: 160px;

    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`

export const EditImage = styled.button`
    border: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props => props.theme['white-0']};
`
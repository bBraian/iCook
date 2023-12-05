import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    text-decoration: none;
    border: 0;
    text-align: start;
    width: 100%;
    height: 220px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`

export const ShadowEffect = styled.div`
    width: 100%;
    height: 60%;
    bottom: 0;
    position: absolute;
    background: linear-gradient(360deg, black 0%, rgba(0, 0, 0, 0) 100%);
`

export const TopBox = styled.div`
    z-index: 1;
    display: flex;
    width: 100%;
    padding: 12px;
    align-items: center;
    justify-content: space-between;
`

export const Stars = styled.div`
    width: 58px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 8px;
    background: rgba(48, 48, 48, 0.30);
    /* backdrop-filter: blur(5px); */

    color: ${props => props.theme['white-0']};
    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
`

export const SaveBoxIcon = styled.button`
    width: 32px;
    height: 32px;
    border: 0;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    background-color: ${props => props.saved == 'S' ? props.theme['primary-50'] : props.theme['white-0']};

    &:hover {
        transform: scale(1.1);
    }
`

export const EditBoxIcon = styled(SaveBoxIcon)`
    background-color: ${props => props.theme['white-0']};
`

export const IndicatorIcon = styled(SaveBoxIcon)`
    background-color: ${props => props.theme['white-0']};
`

export const BottomBox = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 12px;
    gap: 8px;
`

export const Title = styled.h2`
    color: ${props => props.theme['white-0']};
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
`

export const Infos = styled.p`
    color: ${props => props.theme['white-0']};
    font-size: 12px;
    font-weight: 400;
    word-wrap: break-word;
`
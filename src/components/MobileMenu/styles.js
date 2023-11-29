import styled from 'styled-components';
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
    max-width: 400px;
    position: fixed;
    top: 76px;
    right: 0;
    height: 100%;
    width: 68%;
    padding: 10px 20px;
    background-color: ${props => props.theme['primary-60']};
    z-index: 99;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 76px;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 88;
`;

export const MenuHeader = styled.div`
    display: flex;
    gap: 12px;
`

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
`

export const AnonimoBoxImg = styled.div`
    width: 50px;
    height: 50px;
    background-color: #c4c4c4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
`

export const Greetings = styled.div`
    display: flex;
    gap: 3px;
`

export const Hello = styled.h2`
    color: ${props => props.theme['white-0']};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`

export const Username = styled.h2`
    color: ${props => props.theme['white-0']};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`

export const WelcomeText = styled.span`
    color: ${props => props.theme['white-0']};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme['white-0']};
    margin: 12px 0 15px 0;
`

export const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 9px 0 9px;
    gap: 22px;
`

export const MenuItem = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
`

export const MenuText = styled.span`
    color: ${props => props.theme['white-0']};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`

export const Button = styled.button`
    color: ${props => props.config == 'primary' ? props.theme['primary-30'] : props.theme['white-0']};
    background-color: ${props => props.config == 'primary' ? props.theme['white-0'] : props.theme['primary-60']};
    border: 1px solid ${props => props.theme['white-0']};
    border-radius: 10px;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    line-height: 22.40px;
    word-wrap: break-word;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    text-align: center;
    cursor: pointer;
`
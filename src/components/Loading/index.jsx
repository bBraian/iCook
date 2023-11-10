import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/avatar.png"
import { MoonLoader } from 'react-spinners';

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #E23E3E;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
    color: ${props => props.theme['white-0']};
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    text-decoration: none;
    margin-bottom: 80px;
`

const Image = styled.img`
  width: 120px;
`;

export function Loading() {
  return (
    <LoadingOverlay>
      <Image src={logo} alt="Sua Logo" />
      <Title>iCook</Title>
      <MoonLoader color="#FFF" />
    </LoadingOverlay>
  );
};

export default Loading;
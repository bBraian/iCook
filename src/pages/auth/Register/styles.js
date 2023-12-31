import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme['primary-50']};
`;

export const Title = styled.h1`
    color: ${props => props.theme['white-0']};
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    word-wrap: break-word;
    margin-bottom: 68px;
`;

export const Label = styled.label`
  color: ${props => props.theme['white-0']};
  font-size: 24px;
  font-weight: 600;
  line-height: 28.80px;
  word-wrap: break-word;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
`;

export const Input = styled.input`
  display: flex;
  width: 320px;
  padding: 12px 16px;
  align-items: center;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme['neutral-20']};
  background: ${props => props.theme['white-0']};
  margin-top: 15px;

  color: ${props => props.theme['neutral-30']};
  font-size: 14px;
  font-weight: 400;
  font-family: Poppins;
  line-height: 20px;
  word-wrap: break-word;
`;

export const ImgButton = styled.button`
  margin-top: 38px;
  width: 85px;
  height: 85px;
  background-color: ${props => props.theme['white-0']};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
`

export const Img = styled.img`
  margin-top: 38px;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImgLabel = styled.label`
  color: ${props => props.theme['white-0']};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-top: 7px;
`

export const SignUpLink = styled(Link)`
  color: ${props => props.theme['white-0']};
  text-align: center;
  margin-top: 9px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.40px;
  word-wrap: break-word;
  text-decoration: none;
`;
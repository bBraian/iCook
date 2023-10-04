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
    margin-bottom: 120px;
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

export const ForgotPassword = styled.a`
  color: ${props => props.theme['white-0']};
  margin-top: 11px;
  margin-bottom: 17px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.40px;
  word-wrap: break-word;
  text-decoration: none;
  display: flex;
  flex: 1;
  justify-content: end;
`;

export const SignUpLink = styled(Link)`
  color: ${props => props.theme['white-0']};
  margin-top: 9px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.40px;
  word-wrap: break-word;
  text-decoration: none;
`;
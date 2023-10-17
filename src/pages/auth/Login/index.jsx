import { LargeButton } from "../../../components/LargeButton";
import { Container, ForgotPassword, Input, Label, LoginForm, SignUpLink, Title } from "./styles";

export function Login() {
  return (
    <Container>
      <Title>iCook</Title>
      <LoginForm>
        <Label>Fazer login</Label>
        <Input type="text" placeholder="Usuário" />
        <Input type="password" placeholder="Senha" />
        <ForgotPassword to="/in-development">Esqueceu a senha?</ForgotPassword>
        <LargeButton text="LOGAR" config="secondary" />
        <SignUpLink to="/register">Não tem conta. Registre-se</SignUpLink>
      </LoginForm>
    </Container>
  );
};
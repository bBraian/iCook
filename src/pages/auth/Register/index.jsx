import { LargeButton } from "../../../components/LargeButton";
import { Container, Input, Label, LoginForm, SignUpLink, Title } from "./styles";

export function Register() {
  return (
    <Container>
      <Title>iCook</Title>
      <LoginForm>
        <Label>Criar conta</Label>


        <Input type="text" placeholder="Nome de usuário" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirmar senha" style={{marginBottom: '28px'}} />

        <LargeButton text="CRIAR" config="secondary" />
        <SignUpLink href="#">Ja tem conta? Logar-se</SignUpLink>
      </LoginForm>
    </Container>
  );
};
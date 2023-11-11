import { useNavigate } from "react-router-dom";
import { LargeButton } from "../../../components/LargeButton";
import { Container, ForgotPassword, Input, Label, LoginForm, SignUpLink, Title } from "./styles";
import { useState } from "react";
import { api } from "../../../lib/axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault()
    api.post('/login', { email, password })
    .then((response) => {
      console.log(response)
      if(response.status === 200) {
        //armazenar token no context
        //direcionar para home
        // navigate('/')
      } else {
        Toast.fire({
          icon: "error",
          title: "Erro ao fazer login"
        });
      }
    })
    .catch((error) => {
      console.log(error)
      if(error.response.data.message) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Erro ao fazer login"
        });
      }
    })

    
  }
  return (
    <Container>
      <Title>iCook</Title>
      <LoginForm onSubmit={handleLogin}>
        <Label>Fazer login</Label>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <ForgotPassword to="/in-development">Esqueceu a senha?</ForgotPassword>
        <LargeButton text="LOGAR" config="secondary" type="submit" />
        <SignUpLink to="/register">Não tem conta. Registre-se</SignUpLink>
      </LoginForm>
    </Container>
  );
};
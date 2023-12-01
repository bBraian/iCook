import { useNavigate } from "react-router-dom";
import { LargeButton } from "../../../components/LargeButton";
import { Container, ForgotPassword, Input, Label, LoginForm, SignUpLink, Title } from "./styles";
import { useContext, useState } from "react";
import { api } from "../../../lib/axios";
import { AuthContext } from "../../../context/AuthContext";
import TransparentLoading from "../../../components/TransparentLoading";
import { Toast } from "../../../lib/toast";

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoadingAuth, setIsLoadingAuth] = useState(false)
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault()
    setIsLoadingAuth(true)
    api.post('/login', { email, password })
    .then((response) => {
      setIsLoadingAuth(false)
      console.log(response)
      if(response.status === 200) {
        signIn(response.data.access_token)
        .then((res) => {
          if(res) {
            navigate('/')
          } else {
            Toast.fire({
              icon: "error",
              title: "Erro ao fazer login"
            });
          }
        })
        .catch((error) => {
          console.log(error)
          Toast.fire({
            icon: "error",
            title: "Erro ao fazer login"
          });
        })
      } else {
        Toast.fire({
          icon: "error",
          title: "Erro ao fazer login"
        });
      }
    })
    .catch((error) => {
      setIsLoadingAuth(false)
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
      {isLoadingAuth && <TransparentLoading />}
    </Container>
  );
};
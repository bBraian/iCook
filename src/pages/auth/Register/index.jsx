import { useState } from "react";
import { LargeButton } from "../../../components/LargeButton";
import { Container, Img, ImgButton, ImgLabel, Input, Label, LoginForm, SignUpLink, Title } from "./styles";
import { HiOutlineUser } from 'react-icons/hi2'
import Swal from "sweetalert2";
import { api } from "../../../lib/axios";
import { useNavigate } from "react-router-dom";
import TransparentLoading from "../../../components/TransparentLoading";
import { Toast } from "../../../lib/toast";

export function Register() {
  const [avatar, setAvatar] = useState()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', avatar: '' })
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  const updateField = (campo, valor) => {
    setForm((prevForm) => ({
      ...prevForm,
      [campo]: valor,
    }));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    updateField(name, value);
  };

  function handleSetAvatar() {
    setAvatar('https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    if(form.password !== form.confirmPassword) {
      Toast.fire({
        icon: "error",
        title: "A senha não é a mesma"
      });
      return
    }
    if(form.name === '') {
      Toast.fire({
        icon: "error",
        title: "Preencha o nome"
      });
      return
    }
    if(form.email === '') {
      Toast.fire({
        icon: "error",
        title: "Preencha o email"
      });
      return
    }

    api.post('/user', { name: form.name, email: form.email, password: form.password })
    .then((response) => {
      setIsLoading(false)
      // console.log(response)
      if(response.status === 201) {
        Swal.fire({
          title: "Usuário criado com sucesso!",
          text: "Faça login para continuar",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          navigate('/login')
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Erro ao criar usuário"
        });
      }
    })
    .catch((error) => {
      setIsLoading(false)
      if(error.response.data.message.isArray) {
        error.response.data.message.map(err => {
          Toast.fire({
            icon: "error",
            title: err
          });
        })
      } else {
        Toast.fire({
          icon: "error",
          title: error.response.data.message
        });
      }
    })
  }

  return (
    <Container>
      <Title>iCook</Title>
      <LoginForm onSubmit={handleSubmit}>
        <Label>Criar conta</Label>

        {avatar ? (
          <Img src={avatar} />
          ) : (
          <ImgButton onClick={handleSetAvatar}>
            <HiOutlineUser style={{width: '38px', height: '38px', color: '#C1C1C1'}} />
          </ImgButton>
        )}
        <ImgLabel>Foto de perfil</ImgLabel>
        
        <Input type="text" placeholder="Nome" name="name" value={form.name} onChange={handleChange} required />
        <Input type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
        <Input type="password" placeholder="Senha" name="password" value={form.password} onChange={handleChange} required />
        <Input type="password" placeholder="Confirmar senha" name="confirmPassword" style={{marginBottom: '28px'}} value={form.confirmPassword} onChange={handleChange} required />

        <LargeButton text="CRIAR" config="secondary" style={{width: '320px'}} type="submit" />
        <SignUpLink to="/login">Ja tem conta? Logar-se</SignUpLink>
      </LoginForm>
      {isLoading && <TransparentLoading />}
    </Container>
  );
};
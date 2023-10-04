import { useState } from "react";
import { LargeButton } from "../../../components/LargeButton";
import { Container, Img, ImgButton, ImgLabel, Input, Label, LoginForm, SignUpLink, Title } from "./styles";
import { HiOutlineUser } from 'react-icons/hi2'

export function Register() {
  const [avatar, setAvatar] = useState()

  function handleSetAvatar() {
    setAvatar('https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg')
  }
  return (
    <Container>
      <Title>iCook</Title>
      <LoginForm>
        <Label>Criar conta</Label>

        {avatar ? (
          <Img src={avatar} />
          ) : (
          <ImgButton onClick={handleSetAvatar}>
            <HiOutlineUser style={{width: '38px', height: '38px', color: '#C1C1C1'}} />
          </ImgButton>
        )}
        <ImgLabel>Foto de perfil</ImgLabel>
        
        <Input type="text" placeholder="Nome de usuário" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirmar senha" style={{marginBottom: '28px'}} />

        <LargeButton text="CRIAR" config="secondary" style={{width: '320px'}} />
        <SignUpLink href="#">Ja tem conta? Logar-se</SignUpLink>
      </LoginForm>
    </Container>
  );
};
import { HiOutlineUser } from "react-icons/hi2";
import { AnonimoBoxImg, Avatar, Box, Button, Divider, Greetings, Hello, MenuContainer, MenuHeader, MenuItem, MenuItems, MenuText, Overlay, Username, WelcomeText } from "./styles";
import { BsBookmarkDash, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import defaultImg from "../../assets/avatar.png"

export function MobileMenu({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext)

  if (!isOpen) {
    return null;
  }

  function handleLogout() {
    logout()
    handleNavigateTo('login')
  }

  function handleNavigateTo(page) {
      navigate(`/${page}`)
  }

  return (
    <>
      <MenuContainer>
        <MenuHeader>
          {user ? (
            <>
              {user.avatar ? (
                <Avatar src={user.avatar} />
              ) : (
                <Avatar src={defaultImg} />
              )}
              <Box>
                <Greetings>
                  <Hello>Olá,</Hello>
                  <Username>{user.name.split(' ')[0]}</Username>
                </Greetings>
                <WelcomeText>Bon appétit, cheff!</WelcomeText>
              </Box>
            </>
          ) : (
            <>
              <AnonimoBoxImg>
                <HiOutlineUser style={{color: '#FFF', width: '30px', height: '30px'}} />
              </AnonimoBoxImg>
              <Box>
                <Greetings>
                  <Hello>Olá,</Hello>
                  <Username>Cheff</Username>
                </Greetings>
                <WelcomeText>Faça login e seja feliz</WelcomeText>
              </Box>
            </>
          )}

        </MenuHeader>

        <Divider />

        {user ? (
          <>
            <MenuItems>
              <MenuItem to="/profile/1">
                <HiOutlineUser style={{color: '#FFF', width: '30px', height: '30px'}} />
                <MenuText>Meu perfil</MenuText>
              </MenuItem>
              <MenuItem to="/profile/1" state={{ activeButton: 1, user: 0 }}>
                <BsBookmarkDash style={{color: '#FFF', width: '30px', height: '30px'}} />
                <MenuText>Receitas salvas</MenuText>
              </MenuItem>
              <MenuItem to="/profile/1" state={{ activeButton: 2, user: 0 }}>
                <BsFillFileEarmarkTextFill style={{color: '#FFF', width: '30px', height: '30px'}} />
                <MenuText>Minhas receitas</MenuText>
              </MenuItem>
            </MenuItems>

            <Box>
              <Button config="primary" style={{marginTop: '20px'}} onClick={() => handleNavigateTo('criar-receita')}>
                <FaPlus style={{color: '#EE8B8B', width: '14px', height: '14px'}} />
                Criar nova receita
                <span></span>
              </Button>

              <Button style={{marginTop: '12px'}} onClick={handleLogout}>
                <BiLogOut style={{color: '#FFF', width: '14px', height: '14px'}} />
                Deslogar
                <span></span>
              </Button>
            </Box>
          </>
        ) : (
          <Box>
            <Button config="primary" style={{marginTop: '0', justifyContent: 'center'}} onClick={() => handleNavigateTo('login')}>
              Fazer login
            </Button>
          </Box>
        )}

        

      </MenuContainer>
      <Overlay onClick={onClose} />
    </>
  );
}
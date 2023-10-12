import { HiOutlineUser } from "react-icons/hi2";
import { Avatar, Box, Button, Divider, Greetings, Hello, MenuContainer, MenuHeader, MenuItem, MenuItems, MenuText, Overlay, Username, WelcomeText } from "./styles";
import { BsBookmarkDash, BsFillFileEarmarkTextFill } from "react-icons/bs";

export function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <MenuContainer>
        <MenuHeader>
          <Avatar src="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg" />
          <Box>
            <Greetings>
              <Hello>Olá,</Hello>
              <Username>Kelly</Username>
            </Greetings>
            <WelcomeText>Bon appétit, cheff!</WelcomeText>
          </Box>
        </MenuHeader>

        <Divider />

        <MenuItems>
          <MenuItem>
            <HiOutlineUser style={{color: '#FFF', width: '30px', height: '30px'}} />
            <MenuText>Meu perfil</MenuText>
          </MenuItem>
          <MenuItem>
            <BsBookmarkDash style={{color: '#FFF', width: '30px', height: '30px'}} />
            <MenuText>Receitas salvas</MenuText>
          </MenuItem>
          <MenuItem>
            <BsFillFileEarmarkTextFill style={{color: '#FFF', width: '30px', height: '30px'}} />
            <MenuText>Minhas receitas</MenuText>
          </MenuItem>
        </MenuItems>

        <Box>
          <Button config="primary" style={{marginTop: '20px'}}>
            Criar nova receita
          </Button>

          <Button style={{marginTop: '12px'}}>
            Deslogar
          </Button>
        </Box>

      </MenuContainer>
      <Overlay onClick={onClose} />
    </>
  );
}
import { HiOutlineUser } from "react-icons/hi2";
import { Avatar, Box, Button, Divider, Greetings, Hello, MenuContainer, MenuHeader, MenuItem, MenuItems, MenuText, Overlay, Username, WelcomeText } from "./styles";
import { BsBookmarkDash, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";

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
          <MenuItem to="/profile">
            <HiOutlineUser style={{color: '#FFF', width: '30px', height: '30px'}} />
            <MenuText>Meu perfil</MenuText>
          </MenuItem>
          <MenuItem to="/profile" state={{ activeButton: 1 }}>
            <BsBookmarkDash style={{color: '#FFF', width: '30px', height: '30px'}} />
            <MenuText>Receitas salvas</MenuText>
          </MenuItem>
          <MenuItem to="/profile" state={{ activeButton: 2 }}>
            <BsFillFileEarmarkTextFill style={{color: '#FFF', width: '30px', height: '30px'}} />
            <MenuText>Minhas receitas</MenuText>
          </MenuItem>
        </MenuItems>

        <Box>
          <Button config="primary" style={{marginTop: '20px'}}>
            <FaPlus style={{color: '#EE8B8B', width: '14px', height: '14px'}} />
            Criar nova receita
            <span></span>
          </Button>

          <Button style={{marginTop: '12px'}}>
            <BiLogOut style={{color: '#FFF', width: '14px', height: '14px'}} />
            Deslogar
            <span></span>
          </Button>
        </Box>

      </MenuContainer>
      <Overlay onClick={onClose} />
    </>
  );
}
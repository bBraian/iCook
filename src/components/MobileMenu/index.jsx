import { HiOutlineUser } from "react-icons/hi2";
import { Avatar, Box, Divider, Greetings, Hello, MenuContainer, MenuHeader, MenuItem, MenuItems, MenuText, Overlay, Username, WelcomeText } from "./styles";

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
        </MenuItems>

      </MenuContainer>
      <Overlay onClick={onClose} />
    </>
  );
}
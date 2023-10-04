import { Box, Container, HeaderButton, MenuButton, Title } from "./styles";
import { SlMenu } from "react-icons/sl"
import { HiOutlineUser } from 'react-icons/hi2'
import { SmallButton } from "../SmallButton";
import { BiPlus } from "react-icons/bi"

export function Header() {
    return (
        <Container>
            <Title>iCook</Title>
            <Box>
                <SmallButton text="Nova receita" icon={<BiPlus style={{color: '#EE8B8B', width: '20px', height: '20px'}} />} />
                <HeaderButton>
                    <HiOutlineUser style={{color: '#FFF', width: '30px', height: '30px'}} />
                </HeaderButton>
            </Box>
            <MenuButton>
                <SlMenu style={{color: '#FFF', width: '24px', height: '24px'}} />
            </MenuButton>
        </Container>
    )
}
import { Box, Container, HeaderButton, MenuButton, Title } from "./styles";
import { SlMenu } from "react-icons/sl"
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineUser } from 'react-icons/hi2'
import { SmallButton } from "../SmallButton";
import { BiPlus } from "react-icons/bi"
import { MobileMenu } from "../MobileMenu";
import { useState } from "react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <Container>
            <Title>iCook</Title>
            <Box>
                <SmallButton text="Nova receita" icon={<BiPlus style={{color: '#EE8B8B', width: '20px', height: '20px'}} />} />
                <HeaderButton>
                    <HiOutlineUser style={{color: '#FFF', width: '30px', height: '30px'}} />
                </HeaderButton>
            </Box>
            <MenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                    <AiOutlineClose style={{color: '#FFF', width: '26px', height: '26px'}} />
                ) : (
                    <SlMenu style={{color: '#FFF', width: '24px', height: '24px'}} />
                )}
            </MenuButton>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </Container>
    )
}
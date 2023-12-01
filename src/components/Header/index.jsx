import { Box, Container, HeaderButton, Image, MenuButton, Title } from "./styles";
import { SlMenu } from "react-icons/sl"
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineUser } from 'react-icons/hi2'
import { SmallButton } from "../SmallButton";
import { BiPlus } from "react-icons/bi"
import { MobileMenu } from "../MobileMenu";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import defaultImg from '../../assets/avatar.png'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function Header({setIsSearch}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleNavigateToCreateRecipe() {
        if(!user) {
            Swal.fire({
                title: "É preciso estar logado para criar uma receita!",
                text: "Faça login para continuar",
                icon: "warning",
                confirmButtonText: "Fazer login",
                confirmButtonColor: "#3085d6",
                showDenyButton: true,
                denyButtonText: "Cancelar"
            }).then((res) => {
                if (res.isConfirmed) {
                    navigate('/login')
                }
            });
        } else {
            navigate('/criar-receita')
        }
    }

    return (
        <Container>
            <Title to="/" onClick={() => setIsSearch(false)}>iCook</Title>
            <Box>
                <SmallButton text="Nova receita" onClick={handleNavigateToCreateRecipe} icon={<BiPlus style={{color: '#EE8B8B', width: '20px', height: '20px'}} />} />
                {user ? (
                    <HeaderButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {user.avatar ? (
                            <Image src={user.avatar} />
                        ) : (
                            <Image src={defaultImg} />
                        )}
                    </HeaderButton>
                ) : (
                    <HeaderButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <HiOutlineUser style={{color: '#FFF', width: '30px', height: '30px'}} />
                    </HeaderButton>
                )}
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
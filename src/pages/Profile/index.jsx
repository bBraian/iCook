import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProfileRecipeCard } from "./components/ProfileRecipeCard";
import { Avatar, Button, ButtonsBox, Container, Description, Divider, RecipeCounter, RecipesButton, RecipesContainer, RecipesList, Row, Username } from "./styles";
import { useLocation } from "react-router-dom";

export function Profile() {
    const { state } = useLocation();
    useEffect(() => {
        if(state) {
            setActiveButton(state.activeButton)
        }
    }, [state])
    const [activeButton, setActiveButton] = useState(2)
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Avatar src="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg" />
                    <Button>Editar perfil</Button>
                </Row>
                <Row style={{marginTop: '16px'}}>
                    <Username>Alessandra Blair</Username>
                    <RecipeCounter>2 receitas</RecipeCounter>
                </Row>
                <Description>Olá mundo, sou Alessandra Blair, sou da italiana 🟢⚪🔴 e adoro cozinhar!</Description>
            </Container>
            <Divider />
            <RecipesContainer>
                <ButtonsBox>
                    <RecipesButton active={activeButton == 1 ? 's' : 'n'} onClick={() => setActiveButton(1)}>Receitas salvas</RecipesButton>
                    <RecipesButton active={activeButton == 2 ? 's' : 'n'} onClick={() => setActiveButton(2)}>Minhas receitas</RecipesButton>
                </ButtonsBox>

                <RecipesList>
                    <ProfileRecipeCard />
                    <ProfileRecipeCard />
                    <ProfileRecipeCard />
                </RecipesList>
            </RecipesContainer>
        </>
    )
}
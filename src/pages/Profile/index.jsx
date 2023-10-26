import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProfileRecipeCard } from "./components/ProfileRecipeCard";
import { Avatar, Button, ButtonsBox, CancelBtn, Container, Description, DescriptionInput, Divider, LinkButton, RecipeCounter, RecipesButton, RecipesContainer, RecipesList, Row, Username, UsernameInput } from "./styles";
import { useLocation } from "react-router-dom";

export function Profile() {
    const [originalUserData, setOriginalUserdata] = useState({})
    const [userData, setUserdata] = useState({})
    const { state } = useLocation();
    const [isEditting, setIsEditting] = useState(false)
    const [activeButton, setActiveButton] = useState(2)

    useEffect(() => {
        setUserdata({ name: 'Braian', avatar: 'https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg', description: 'Olá mundo, sou Alessandra Blair, sou da italiana 🟢⚪🔴 e adoro cozinhar!' })
        setOriginalUserdata({ name: 'Braian', avatar: 'https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg', description: 'Olá mundo, sou Alessandra Blair, sou da italiana 🟢⚪🔴 e adoro cozinhar!' })
    }, [])

    useEffect(() => {
        if(state) {
            if(state.edit) {
                setIsEditting(true)
            } else {
                setIsEditting(false)
            }
            if(state.activeButton) {
                setActiveButton(state.activeButton)
            }
        }
    }, [state])

    function handleSaveProfile() {

    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Avatar src={userData.avatar} />
                    {isEditting ? (
                        <>
                            <CancelBtn to="/profile" state={{ edit: false }} onClick={() => setUserdata(originalUserData)}>Cancelar</CancelBtn>
                            <Button onClick={handleSaveProfile}>Salvar Perfil</Button>
                        </>
                    ) : (
                        <LinkButton to="/profile" state={{ edit: true }}>Editar Perfil</LinkButton>
                    )}
                </Row>
                <Row style={{marginTop: '16px'}}>
                    {isEditting ? (
                        <UsernameInput value={userData.name} onChange={(e) => setUserdata({...userData, name: e.target.value})} />
                    ) : (
                        <>
                            <Username>{userData.name}</Username>
                            <RecipeCounter>2 receitas</RecipeCounter>
                        </>
                    )}
                </Row>
                {isEditting ? (
                    <DescriptionInput rows={3} value={userData.description} onChange={(e) => setUserdata({...userData, description: e.target.value})} />
                ) : (
                    <Description>{userData.description}</Description>
                )}
                
            </Container>
            <Divider />
            <RecipesContainer>
                <ButtonsBox>
                    <RecipesButton active={activeButton == 1 ? 's' : 'n'} onClick={() => setActiveButton(1)}>Receitas salvas</RecipesButton>
                    <RecipesButton active={activeButton == 2 ? 's' : 'n'} onClick={() => setActiveButton(2)}>Minhas receitas</RecipesButton>
                </ButtonsBox>

                {activeButton == 1 ? (
                    <RecipesList>
                        <ProfileRecipeCard type={1} />
                        <ProfileRecipeCard type={1} />
                        <ProfileRecipeCard type={1} />
                    </RecipesList>
                ) : (
                    <RecipesList>
                        <ProfileRecipeCard type={2} />
                        <ProfileRecipeCard type={2} />
                    </RecipesList>
                )}
  

            </RecipesContainer>
        </>
    )
}
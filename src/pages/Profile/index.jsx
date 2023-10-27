import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProfileRecipeCard } from "./components/ProfileRecipeCard";
import { Avatar, Button, ButtonsBox, CancelBtn, Container, Description, DescriptionInput, Divider, LinkButton, RecipeCounter, RecipesButton, RecipesContainer, RecipesList, Row, Username, UsernameInput } from "./styles";
import { useLocation, useParams } from "react-router-dom";

export function Profile() {
    const [originalUserData, setOriginalUserdata] = useState({})
    const [userData, setUserdata] = useState({})
    const { state } = useLocation();
    const { userId } = useParams()
    const [isEditting, setIsEditting] = useState(false)
    const [activeButton, setActiveButton] = useState(2)
    const [isMyProfile, setIsMyProfile] = useState(false)

    useEffect(() => {
        setUserdata({ name: 'Braian', avatar: 'https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg', description: 'Olá mundo, sou Alessandra Blair, sou da italiana 🟢⚪🔴 e adoro cozinhar!' })
        setOriginalUserdata({ name: 'Braian', avatar: 'https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg', description: 'Olá mundo, sou Alessandra Blair, sou da italiana 🟢⚪🔴 e adoro cozinhar!' })
    }, [])

    useEffect(() => {
        if(checkIsMyProfile(userId)) {
            setIsMyProfile(true)
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
        } else {
            setIsMyProfile(false)
        }
    }, [state])

    function checkIsMyProfile(userId) { //Essa função checará se o usuário é o mesmo do perfil (validação backend), caso não seja o mesmo usuário, bloquear botões de edição
        console.log(userId)
        if(userId == 0) {
            return true;
        }
        return false;
    }

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
                            <CancelBtn to="/profile/0" state={{ edit: false, user: 0 }} onClick={() => setUserdata(originalUserData)}>Cancelar</CancelBtn>
                            <Button onClick={handleSaveProfile}>Salvar Perfil</Button>
                        </>
                    ) : (
                        <>
                            {isMyProfile ? (
                                <LinkButton to="/profile/0" state={{ edit: true, user: 0 }}>Editar Perfil</LinkButton>
                            ) : (<></>)}
                        </>
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
                <ButtonsBox isMyProfile={isMyProfile} >
                    { isMyProfile ? (
                        <>
                            <RecipesButton active={activeButton == 1 ? 's' : 'n'} onClick={() => setActiveButton(1)}>Receitas salvas</RecipesButton>
                            <RecipesButton active={activeButton == 2 ? 's' : 'n'} onClick={() => setActiveButton(2)}>Minhas receitas</RecipesButton>
                        </>
                    ) : (
                        <RecipesButton active="s">Receitas de Braian</RecipesButton>
                    ) }
                </ButtonsBox>


                {isMyProfile ? (
                    <>
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
                    </>
                ) : (
                    <RecipesList>
                        <ProfileRecipeCard type={3} />
                        <ProfileRecipeCard type={3} />
                    </RecipesList>
                )}
  


            </RecipesContainer>
        </>
    )
}
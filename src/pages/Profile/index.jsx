import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProfileRecipeCard } from "./components/ProfileRecipeCard";
import { Avatar, Button, ButtonsBox, CancelBtn, Container, Description, DescriptionInput, Divider, LinkButton, RecipeCounter, RecipesButton, RecipesContainer, RecipesList, Row, Username, UsernameInput } from "./styles";
import { useLocation, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import defautAvatar from "../../assets/avatar.png"
import Loading from "../../components/Loading";
import TransparentLoading from "../../components/TransparentLoading";
import { Toast } from "../../lib/toast";

export function Profile() {
    const [isLoading, setIsLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [originalUserData, setOriginalUserdata] = useState({})
    const [userData, setUserdata] = useState({})
    const { state } = useLocation();
    const { userId } = useParams()
    const [isEditting, setIsEditting] = useState(false)
    const [activeButton, setActiveButton] = useState(2)
    const [isMyProfile, setIsMyProfile] = useState(false)

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        if(state) {
            if(state.activeButton) {
                setActiveButton(state.activeButton)
            }
        }
    }, [state])

    async function getUser() {
        const { data } = await api.get(`user/${userId}`)
        // console.log(data)
        setUserdata(data)
        if(data.is_me) {
            setIsMyProfile(true)
            setOriginalUserdata(data)
        } else {
            setIsMyProfile(false)
        }
        setIsLoading(false)
    }

    function handleSaveProfile() {
        setUpdating(true)
        api.patch(`/user/${userId}`, {
            name: userData.name,
            description: userData.description
        }).then(res => {
            setUpdating(false)
            setIsEditting(false)
            console.log(res)
            Toast.fire({
                icon: "success",
                title: "Usuário atualizado com sucesso"
            });
        }).catch(err => {
            setUpdating(false)
            setIsEditting(false)
            Toast.fire({
                icon: "error",
                title: "Erro ao atualizar usuário"
            });
            console.log(err)
        })
    }
    
    function removeSavedRecipe(id) {
        const savedRecipes = [...userData.saved_recipes];
    
        const index = savedRecipes.findIndex((recipe) => recipe.id === id);
    
        if (index !== -1) {
            savedRecipes.splice(index, 1);
    
            setUserdata({ ...userData, saved_recipes: savedRecipes });
        }
    };

    function cancelUserEdit() {
        setUserdata(originalUserData)
        setIsEditting(false)
    }

    if(isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <Header />
            <div style={{maxWidth: '900px', margin: '0 auto'}}>
                <Container>
                    <Row>
                        <Avatar src={userData.avatar ? userData.avatar : defautAvatar} />
                        {isEditting ? (
                            <div>
                                <CancelBtn style={{marginRight: '8px'}} onClick={cancelUserEdit}>Cancelar</CancelBtn>
                                <Button onClick={handleSaveProfile}>Salvar Perfil</Button>
                            </div>
                        ) : (
                            <>
                                {isMyProfile ? (
                                    <LinkButton onClick={() => setIsEditting(true)}>Editar Perfil</LinkButton>
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
                                <RecipeCounter>{userData.recipes.length} receitas</RecipeCounter>
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
                    <ButtonsBox ismyprofile={isMyProfile ? 'S' : 'N'} >
                        { isMyProfile ? (
                            <>
                                <RecipesButton active={activeButton == 1 ? 's' : 'n'} onClick={() => setActiveButton(1)}>Receitas salvas</RecipesButton>
                                <RecipesButton active={activeButton == 2 ? 's' : 'n'} onClick={() => setActiveButton(2)}>Minhas receitas</RecipesButton>
                            </>
                        ) : (
                            <RecipesButton active="s">Receitas de {userData.name != undefined && userData.name.split(' ')[0]}</RecipesButton>
                        ) }
                    </ButtonsBox>


                    {isMyProfile ? (
                        <>
                            {activeButton == 2 ? (
                                <RecipesList>
                                    {userData.recipes != undefined && userData.recipes.map(recipe => (
                                        <ProfileRecipeCard key={recipe.id} data={recipe} type={2} />
                                    ))}
                                </RecipesList>
                            ) : (
                                <RecipesList>
                                    {userData.saved_recipes != undefined && userData.saved_recipes.map(savedRecipes => (
                                        <ProfileRecipeCard key={savedRecipes.id} data={savedRecipes} type={1} removeSavedRecipe={removeSavedRecipe} />
                                    ))}
                                </RecipesList>
                            )}
                        </>
                    ) : (
                        <RecipesList>
                            {userData.recipes != undefined && userData.recipes.map(recipe => (
                                <ProfileRecipeCard key={recipe.id} data={recipe} type={3} />
                            ))}
                        </RecipesList>
                    )}
    


                </RecipesContainer>
            </div>
            {updating && <TransparentLoading />}
        </>
    )
}
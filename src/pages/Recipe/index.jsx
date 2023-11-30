import { BsBookmarkDash, BsFillPeopleFill } from "react-icons/bs"
import { Header } from "../../components/Header"
import { Avatar, BookmarkButton, Container, Img, ImgContainer, RateButton, RatingStarsBox, RatingText, Review, ReviewsCounter, Row, ServesCounterBox, Stars, Title, UserInfos, Username } from "./styles"
import { AiTwotoneStar } from "react-icons/ai"
import { useContext, useEffect, useState } from "react"
import { Ingredient } from "./components/Ingredient"
import { Preparation } from "./components/Preparation"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"
import Loading from "../../components/Loading"
import TransparentLoading from "../../components/TransparentLoading"
import defaultImage from "../../assets/avatar.png"
import { AuthContext } from "../../context/AuthContext"
import Swal from "sweetalert2"

const starsRate = [1,2,3,4,5];

export function Recipe() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [ratting, setRatting] = useState(-1)
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState({})
    const [saved, setSaved] = useState('N')
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if(recipeId > 0) {
            getRecipe()
        }
    }, [])

    async function getRecipe() {
        const { data } = await api.get(`recipe/${recipeId}`)
        // console.log(data)
        setRecipe(data)
        setSaved(data.saved ? 'S' : 'N')
        if(data.rated) {
            setRatting(data.rate)
        }
        setIsLoading(false)
    }

    function handleRate(rate) {
        if(!user) {
            Swal.fire({
                title: "É preciso estar logado para avaliar uma receita!",
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
            setIsSubmitting(true)
            api.patch(`recipe/rate/${recipeId}`, { rate: rate })
            .then(() => {
                setIsSubmitting(false)
                setRatting(rate)
            })
            .catch(() => {
                setIsSubmitting(false)
                Swal.fire({
                    title: "Erro!",
                    text: "Erro ao avaliar",
                    icon: "error",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#3085d6"
                })
            })
        }
    }

    function handleSaveUnsaveRecipe() {
        setIsSubmitting(true)
        if(saved == 'S') {
            //unsave
            api.delete(`user/unsave-recipe/${recipeId}`)
            .then(() => {
                setIsSubmitting(false)
                setSaved('N')
            })
            .catch(() => {
                setIsSubmitting(false)
                Swal.fire({
                    title: "Erro!",
                    text: "Erro ao remover a receita salva",
                    icon: "error",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#3085d6"
                })
            })
        } else {
            //save
            api.post(`user/save-recipe/${recipeId}`)
            .then(() => {
                setIsSubmitting(false)
                setSaved('S')
            })
            .catch(() => {
                setIsSubmitting(false)
                Swal.fire({
                    title: "Erro!",
                    text: "Erro ao salvar receita",
                    icon: "error",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#3085d6"
                })
            })
        }
    }

    const stars = starsRate.map(rate => (
        <RateButton key={rate} onClick={() => handleRate(rate)}>
            <AiTwotoneStar style={{ color: ratting == -1 ? '#A9A9A9' : ratting >= rate ? '#FFB660' : '#A9A9A9', width: '24px', height: '24px' }} />
        </RateButton>
    ));

    if(isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Title>{recipe.name}</Title>
                    <BookmarkButton saved={saved} type="button" onClick={handleSaveUnsaveRecipe}>
                        <BsBookmarkDash style={{color: recipe.saved ? '#FFF' : '#EE8B8B', width: '22px', height: '22px'}} />
                    </BookmarkButton>
                </Row>
                <ImgContainer>
                    <Img src={recipe.image} />
                    <ServesCounterBox>
                        <BsFillPeopleFill style={{color: '#FFF', width: '18px', height: '18px'}} />
                        <span>{recipe.serves}</span>
                    </ServesCounterBox>
                </ImgContainer>
                <Row style={{marginTop: '9px'}}>
                    <UserInfos>
                        <Avatar src={recipe.avatar ? recipe.avatar : defaultImage } />
                        <Username>{recipe.user_name}</Username>
                    </UserInfos>
                    <Review>
                        <Stars>
                            <AiTwotoneStar style={{color: '#FFB660', width: '16px', height: '16px'}} />
                            <span>{isNaN(recipe.rating_sum / recipe.review_amount) ? 0 : recipe.rating_sum / recipe.review_amount}</span>
                        </Stars>
                        <ReviewsCounter>
                            ({recipe.review_amount} Reviews)
                        </ReviewsCounter>
                    </Review>
                </Row>
                <Row style={{marginTop: '14px'}}>
                    <RatingText>Avalie esta receita</RatingText>
                    <RatingStarsBox>
                        {stars}
                    </RatingStarsBox>
                </Row>

                <Ingredient ingredients={recipe.ingredients} />
                <Preparation steps={recipe.steps} kitchen_time={recipe.kitchen_time} />
            </Container>
            {isSubmitting && <TransparentLoading />}
        </>
    )
}
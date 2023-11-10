import { BsBookmarkDash, BsFillPeopleFill } from "react-icons/bs"
import { Header } from "../../components/Header"
import { Avatar, BookmarkButton, Container, Img, ImgContainer, RateButton, RatingStarsBox, RatingText, Review, ReviewsCounter, Row, ServesCounterBox, Stars, Title, UserInfos, Username } from "./styles"
import { AiTwotoneStar } from "react-icons/ai"
import { useEffect, useState } from "react"
import { Ingredient } from "./components/Ingredient"
import { Preparation } from "./components/Preparation"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"
import Loading from "../../components/Loading"

const starsRate = [1,2,3,4,5];

export function Recipe() {
    const [isLoading, setIsLoading] = useState(true);
    const [ratting, setRatting] = useState(-1)
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        if(recipeId > 0) {
            getRecipe()
        }
    }, [])

    async function getRecipe() {
        const { data } = await api.get(`recipe/${recipeId}`)
        setRecipe(data)
        if(data.rated) {
            setRatting(data.rate)
        }
        setIsLoading(false)
    }

    const stars = starsRate.map(rate => (
        <RateButton key={rate} onClick={() => setRatting(rate)}>
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
                    <BookmarkButton saved={recipe.saved ? 'S' : 'N'}>
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
                        <Avatar src={recipe.avatar} />
                        <Username>{recipe.user_name}</Username>
                    </UserInfos>
                    <Review>
                        <Stars>
                            <AiTwotoneStar style={{color: '#FFB660', width: '16px', height: '16px'}} />
                            <span>{recipe.rating_sum / recipe.review_amount}</span>
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
        </>
    )
}
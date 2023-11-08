import { BsBookmarkDash, BsFillPeopleFill } from "react-icons/bs"
import { Header } from "../../components/Header"
import { Avatar, BookmarkButton, Container, Img, ImgContainer, RateButton, RatingStarsBox, RatingText, Review, ReviewsCounter, Row, ServesCounterBox, Stars, Title, UserInfos, Username } from "./styles"
import { AiTwotoneStar } from "react-icons/ai"
import { useEffect, useState } from "react"
import { Ingredient } from "./components/Ingredient"
import { Preparation } from "./components/Preparation"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"

export function Recipe() {
    const [ratting, setRatting] = useState(-1)
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState()

    // useEffect(() => {
    //     if(recipeId > 0) {
    //         getRecipe()
    //     }
    // }, [])

    // async function getRecipe() {
    //     const data = await api.get(`recipe/${recipeId}`)
    //     setRecipe(data)
    // }

    const stars = Array.from({ length: 5 }, (_, index) => (
        <RateButton key={index} onClick={() => setRatting(index)}>
            <AiTwotoneStar style={{ color: ratting == -1 ? '#A9A9A9' : ratting >= index ? '#FFB660' : '#A9A9A9', width: '24px', height: '24px' }} />
        </RateButton>
    ));
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Title>Como fazer torrada francesa</Title>
                    <BookmarkButton>
                        <BsBookmarkDash style={{color: '#FFF', width: '22px', height: '22px'}} />
                    </BookmarkButton>
                </Row>
                <ImgContainer>
                    <Img src="https://img.freepik.com/fotos-premium/prato-de-comida-brasileira-em-fundo-fotografico_496782-1085.jpg" />
                    <ServesCounterBox>
                        <BsFillPeopleFill style={{color: '#FFF', width: '18px', height: '18px'}} />
                        <span>4</span>
                    </ServesCounterBox>
                </ImgContainer>
                <Row style={{marginTop: '9px'}}>
                    <UserInfos>
                        <Avatar src="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg" />
                        <Username>Roberta Anny</Username>
                    </UserInfos>
                    <Review>
                        <Stars>
                            <AiTwotoneStar style={{color: '#FFB660', width: '16px', height: '16px'}} />
                            <span>4,5</span>
                        </Stars>
                        <ReviewsCounter>
                            (300 Reviews)
                        </ReviewsCounter>
                    </Review>
                </Row>
                <Row style={{marginTop: '14px'}}>
                    <RatingText>Avalie esta receita</RatingText>
                    <RatingStarsBox>
                        {stars}
                    </RatingStarsBox>
                </Row>

                <Ingredient />
                <Preparation />
            </Container>
        </>
    )
}
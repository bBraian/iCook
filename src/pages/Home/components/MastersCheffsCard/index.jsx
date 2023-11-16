import { AiTwotoneStar } from "react-icons/ai";
import { Box, Container, Flex, Img, RecipesCounter, ReviewsCounter, Row, Stars, Title } from "./styles";
import defaultImage from '../../../../assets/avatar.png'

export function MastersCheffsCard({data}) {
    return (
        <Container to={`profile/${data.id}`}>
            <Img src={data.avatar ? data.avatar : defaultImage} />
            <Box>
                <Title>{data.name}</Title>
                <Flex>
                    <RecipesCounter>{data.recipe_amount} receitas</RecipesCounter>
                    <Row>
                        <Stars>
                            <AiTwotoneStar style={{color: '#FFB660', width: '16px', height: '16px'}} />
                            <span>{isNaN(data.rating_sum / data.review_amount) ? 0 : data.rating_sum / data.review_amount}</span>
                        </Stars>
                        <ReviewsCounter>
                            ({data.rating_count} Reviews)
                        </ReviewsCounter>
                    </Row>
                </Flex>
            </Box>
        </Container>
    )
}
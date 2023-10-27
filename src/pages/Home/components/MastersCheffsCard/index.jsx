import { AiTwotoneStar } from "react-icons/ai";
import { Box, Container, Flex, Img, RecipesCounter, ReviewsCounter, Row, Stars, Title } from "./styles";

export function MastersCheffsCard() {
    return (
        <Container to="profile/1">
            <Img src="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg" />
            <Box>
                <Title>Alessandra Blair</Title>
                <Flex>
                    <RecipesCounter>2 receitas</RecipesCounter>
                    <Row>
                        <Stars>
                            <AiTwotoneStar style={{color: '#FFB660', width: '16px', height: '16px'}} />
                            <span>4,5</span>
                        </Stars>
                        <ReviewsCounter>
                            (300 Reviews)
                        </ReviewsCounter>
                    </Row>
                </Flex>
            </Box>
        </Container>
    )
}
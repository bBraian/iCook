import { Box, Container, Img, Title, UserCreator } from "./styles";

export function RecentRecipesCard() {
    return (
        <Container>
            <Img src="https://guararapesonline.com.br/shoppingguararapes/2020/08/LB-laca-burguer.jpg" />
            <Box>
                <Title>Hambúrguer de Frango</Title>
                <UserCreator>Adrianna Curl</UserCreator>
            </Box>
        </Container>
    )
}
import { Box, Container, Img, Title, UserCreator } from "./styles";

export function RecentRecipesCard({ data }) {
    console.log(data)
    return (
        <Container to={`/receita/${data.id}`}>
            <Img src={data.image} />
            <Box>
                <Title>{data.name}</Title>
                <UserCreator>Adrianna Curl</UserCreator>
            </Box>
        </Container>
    )
}
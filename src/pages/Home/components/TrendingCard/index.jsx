import { BottomBox, Container, Img, Infos, SaveBoxIcon, ShadowEffect, Stars, Title, TopBox } from "./styles";
import { AiTwotoneStar } from "react-icons/ai"
import { BsBookmarkDash } from "react-icons/bs"

export function TrendingCard({ data }) {
    return (
        <Container to={`/receita/${data.id}`} >
            <Img src={data.image} />
            <ShadowEffect />
            <TopBox>
                <Stars>
                    <AiTwotoneStar style={{color: '#FFF', width: '16px', height: '16px'}} />
                    <span>5,0</span>
                </Stars>
                <SaveBoxIcon>
                    <BsBookmarkDash style={{color: '#EE8B8B', width: '18px', height: '18px'}} />
                </SaveBoxIcon>
            </TopBox>
            <BottomBox>
                <Title>{data.title}</Title>
                <Infos>{data.ingredients_amount} Ingredients | {data.kitchen_time}</Infos>
            </BottomBox>
        </Container>
    )
}
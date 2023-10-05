import { BottomBox, Container, Img, Infos, SaveBoxIcon, ShadowEffect, Stars, Title, TopBox } from "./styles";
import { AiTwotoneStar } from "react-icons/ai"
import { BsBookmarkDash } from "react-icons/bs"

export function TrendingCard() {
    return (
        <Container>
            <Img src="https://img.freepik.com/fotos-premium/prato-de-comida-brasileira-em-fundo-fotografico_496782-1085.jpg" />
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
                <Title>Como fazer italiano espaguete em casa</Title>
                <Infos>12 Ingredients | 40 min</Infos>
            </BottomBox>
        </Container>
    )
}
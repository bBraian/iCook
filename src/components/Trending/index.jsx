import styled from "styled-components"
import { TrendingCard } from "../TrendingCard"

export function Trending() {
    return (
        <Container>
            <Title>Trending 🔥</Title>
            <CardList>
                <TrendingCardBox>
                    <TrendingCard />
                    <Creator>
                        <Avatar src="https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg" />
                        <Username>Por Niki Samantha</Username>
                    </Creator>
                </TrendingCardBox>
                <TrendingCardBox>
                    <TrendingCard />
                    <Creator>
                        <Avatar src="https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg" />
                        <Username>Por Niki Samantha</Username>
                    </Creator>
                </TrendingCardBox>
                <TrendingCardBox>
                    <TrendingCard />
                    <Creator>
                        <Avatar src="https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg" />
                        <Username>Por Niki Samantha</Username>
                    </Creator>
                </TrendingCardBox>
                <TrendingCardBox>
                    <TrendingCard />
                    <Creator>
                        <Avatar src="https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg" />
                        <Username>Por Niki Samantha</Username>
                    </Creator>
                </TrendingCardBox>
            </CardList>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    color: ${props => props.theme['neutral-90']};
    font-size: 20px;
    font-family: Poppins;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 16px;
`

const CardList = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    gap: 1rem;
`

const TrendingCardBox = styled.div`
    display: flex;
    flex-direction: column;
`

const Creator = styled.div`
    margin-top: 9px;
    display: flex;
    align-items: center;
    gap: 8px;
`

const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`

const Username = styled.p`
    color: ${props => props.theme['neutral-40']};
    font-size: 12px;
    font-weight: 400;
`
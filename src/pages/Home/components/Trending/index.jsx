import styled from "styled-components"
import { TrendingCard } from "../TrendingCard"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import defaultImage from "../../../../assets/avatar.png"

export function Trending() {
    const [trending, setTrending] = useState([])

    useEffect(() => {
        getTrending()
    }, [])

    async function getTrending() {
        const { data } = await api.get('recipe/trending')
        setTrending(data)
    }
    return (
        <Container>
            <Title>Trending 🔥</Title>
            <CardList>
                {trending.map(recipe => (
                    <TrendingCardBox key={recipe.id}>
                        <TrendingCard data={recipe} />
                        <Creator to="profile/1">
                            <Avatar src={recipe.avatar ? recipe.avatar : defaultImage} />
                            <Username>Por {recipe.user_name}</Username>
                        </Creator>
                    </TrendingCardBox>
                ))}
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
    overflow-x: scroll;
    gap: 1rem;
`

const TrendingCardBox = styled.div`
    display: flex;
    flex-direction: column;
`

const Creator = styled(Link)`
    margin-top: 9px;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    border: 0;
    text-decoration: none;
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
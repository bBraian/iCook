import styled from "styled-components"
import { SearchCard } from "../SearchCard"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import defaultImage from "../../../../assets/avatar.png"

export function SearchList({textFilter, filter}) {
    const [search, setSearch] = useState([])

    useEffect(() => {
        getSearch({...filter, name: textFilter})
    }, [textFilter, filter])

    async function getSearch(filterData) {
        console.log(filterData)
        const { data } = await api.get('recipe/search', filterData)
        setSearch(data)
    }
    return (
        <Container>
            <CardList>
                {search.map(recipe => (
                    <TrendingCardBox key={recipe.id}>
                        <SearchCard data={recipe} />
                        <Creator to={`profile/${recipe.user_id}`}>
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

const CardList = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 16px 0;
    gap: 1.5rem 2rem;
`

const TrendingCardBox = styled.div`
    display: flex;
    flex-direction: column;
`

const Creator = styled(Link)`
    margin-top: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    border: 0;
    text-decoration: none;
`

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
`

const Username = styled.p`
    color: ${props => props.theme['neutral-40']};
    font-size: 14px;
    font-weight: 400;
`
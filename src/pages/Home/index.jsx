import styled from "styled-components";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Trending } from "./components/Trending";
import { RecentRecipes } from "./components/RecentRecipes";
import { MastersCheffs } from "./components/MastersCheffs";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../components/Loading";

export function Home() {
    const { loading } = useContext(AuthContext)
    const [filter, setFilter] = useState({ category: '0', type: '0', ingredient: [], serves: '0' })
    
    console.log(filter)

    if(loading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <Header />
            <Search filter={filter} setFilter={setFilter} />
            <Body>
                <Trending />
                <RecentRecipes />
                <MastersCheffs />
            </Body>
        </>
    )
}

const Body = styled.div`
    padding: 0 1rem;
    margin: 0 auto;
    max-width: 1200px;
`
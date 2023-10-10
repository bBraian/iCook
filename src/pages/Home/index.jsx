import styled from "styled-components";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Trending } from "../../components/Trending";
import { RecentRecipes } from "../../components/RecentRecipes";
import { MastersCheffs } from "../../components/MastersCheffs";

export function Home() {
    return (
        <>
            <Header />
            <Search />
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
`
import styled from "styled-components";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Trending } from "../../components/Trending";

export function Home() {
    return (
        <>
            <Header />
            <Search />
            <Body>
                <Trending />
            </Body>
        </>

    )
}

const Body = styled.div`
    padding: 0 1rem;
    margin: 0 auto;
`
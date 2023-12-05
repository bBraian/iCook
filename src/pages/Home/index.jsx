import styled from "styled-components";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Trending } from "./components/Trending";
import { RecentRecipes } from "./components/RecentRecipes";
import { MastersCheffs } from "./components/MastersCheffs";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../components/Loading";
import { SearchList } from "./components/SearchList";

export function Home() {
    const { loading } = useContext(AuthContext)
    const [filter, setFilter] = useState({ category: '0', type: '0', ingredient: [], serves: '0' })
    const [textFilter, setTextFilter] = useState('')
    const [isSearch, setIsSearch] = useState(false)

    if(loading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <Header setIsSearch={setIsSearch} />
            <Search filter={filter} setFilter={setFilter} setIsSearch={setIsSearch} textFilter={textFilter} setTextFilter={setTextFilter} />
            <Body>
                {isSearch ? (
                    <SearchList filter={filter} textFilter={textFilter} isSearch={isSearch} />
                ) : (
                    <>
                        <Trending />
                        <RecentRecipes />
                        <MastersCheffs />
                    </>
                )}
                
            </Body>
        </>
    )
}

const Body = styled.div`
    padding: 0 1rem;
    margin: 0 auto;
    max-width: 1200px;
`
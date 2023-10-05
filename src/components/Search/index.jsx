import { Container, Input, SearchButton } from "./styles";
import { FiSearch } from "react-icons/fi"

export function Search() {
    return (
        <Container>
            <Input type="text" placeholder="Pesquisar receitas" />
            <SearchButton>
                <FiSearch style={{color: '#FFF', width: '20px', height: '20px'}} />
            </SearchButton>
        </Container>
    )
}
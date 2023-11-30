import { Container, FilterButton, FilterCount, Input, SearchButton } from "./styles";
import { FiSearch } from "react-icons/fi"
import { FaFilter } from "react-icons/fa";
import { FilterModal } from "./FilterModal";
import { useEffect, useState } from "react";

export function Search({filter, setFilter}) {
    const [modalOpen, setModalOpen] = useState(true)
    const [filterAmount, setFilterAmount] = useState(0)

    useEffect(() => {
        let counter = 0
        if(filter.category != '0') {
            counter ++
        }
        if(filter.type != '0') {
            counter ++
        }
        if(filter.serves != '0') {
            counter ++
        }
        if(filter.ingredient.length > 0) {
            counter = counter + filter.ingredient.length
        }

        setFilterAmount(counter)
    }, [filter])

    return (
        <Container>
            <Input type="text" placeholder="Pesquisar receitas" />
            <SearchButton>
                <FiSearch style={{color: '#FFF', width: '20px', height: '20px'}} />
            </SearchButton>
            <FilterButton onClick={() => setModalOpen(true)}>
                <FaFilter style={{color: '#FFF', width: '20px', height: '20px'}} />
                {filterAmount > 0 && <FilterCount>{filterAmount}</FilterCount>}
            </FilterButton>
            <FilterModal 
                modalOpen={modalOpen} 
                setModalOpen={setModalOpen} 
                filter={filter}
                setFilter={setFilter}
            />
        </Container>
    )
}
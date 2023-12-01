import { Container, FilterButton, FilterCount, Input, SearchButton } from "./styles";
import { FiSearch } from "react-icons/fi"
import { FaFilter } from "react-icons/fa";
import { FilterModal } from "./FilterModal";
import { useEffect, useState } from "react";
import { Toast } from "../../lib/toast";

export function Search({filter, setFilter, setIsSearch, textFilter, setTextFilter}) {
    const [modalOpen, setModalOpen] = useState(false)
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
    
    function handleSearch() {
        if(filterAmount == 0 && textFilter == "") {
            Toast.fire({
                icon: "warning",
                title: "Escreva ou selecione algum filtro"
            });
        } else {
            setIsSearch(true)
        }
    }

    return (
        <Container>
            <Input type="text" placeholder="Pesquisar receitas" value={textFilter} onChange={(e) => setTextFilter(e.target.value)} />
            <SearchButton type="button" onClick={handleSearch}>
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
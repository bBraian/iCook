import styled from "styled-components"
import { MastersCheffsCard } from "../MastersCheffsCard"
import { useEffect, useState } from "react"
import { api } from "../../../../lib/axios"

export function MastersCheffs() {
    const [masterCheffs, setMasterCheffs] = useState([])

    useEffect(() => {
        getMasterCheffs()
    }, [])

    async function getMasterCheffs() {
        try {
            const {data} = await api.get('user/all')
            setMasterCheffs(data)
        } catch (error) {
            console.log(error)   
        }
    }

    return (
        <Container>
            <Title>Master's Cheffs</Title>
            <MastersCheffsList>
                {masterCheffs.map(cheff => (
                    <MastersCheffsCard key={cheff.id} data={cheff} />
                ))}
            </MastersCheffsList>
        </Container>
    )
}

const Container = styled.section`
    margin-top: 1.5rem;
`

const Title = styled.h1`
    color: ${props => props.theme['neutral-90']};
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 16px;
`

const MastersCheffsList = styled.div`
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
`
import styled from "styled-components"

export function IngredientItem({ data }) {
    return (
        <Container>
            <Img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88c63a4c-0022-4aa3-94c2-06b6d77becf9/d6deru2-57ecd407-5166-4356-9c60-8d39cbe5433d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4YzYzYTRjLTAwMjItNGFhMy05NGMyLTA2YjZkNzdiZWNmOVwvZDZkZXJ1Mi01N2VjZDQwNy01MTY2LTQzNTYtOWM2MC04ZDM5Y2JlNTQzM2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8yG5hTXcW18HEmUFSz6q4H4Upth24TQHSWreFZBz8Jc" />
            <Title>Ovo</Title>
            <Amount>3un</Amount>
        </Container>
    )
}

export const Container = styled.div`
    width: 100%;
    height: 110px;
    border-radius: 10px;
    background-color: ${props => props.theme['neutral-10']};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-bottom: 6px;
    object-fit: cover;
`

export const Title = styled.h2`
    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-weight: 600;
    line-height: 19.60px;
    word-wrap: break-word;
`

export const Amount = styled.span`
    color: ${props => props.theme['neutral-40']};
    font-size: 12px;
    font-weight: 400;
    word-wrap: break-word
`
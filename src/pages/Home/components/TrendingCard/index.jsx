import { useContext } from "react";
import { BottomBox, Container, Img, Infos, SaveBoxIcon, ShadowEffect, Stars, Title, TopBox } from "./styles";
import { AiTwotoneStar } from "react-icons/ai"
import { BsBookmarkDash } from "react-icons/bs"
import { AuthContext } from "../../../../context/AuthContext";
import { api } from "../../../../lib/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function TrendingCard({ data }) {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleBookmarkRecipe(event, recipeId) {
        event.preventDefault();
        if(!user) {
            Swal.fire({
                title: "É preciso estar logado para salvar uma receita!",
                text: "Faça login para continuar",
                icon: "warning",
                confirmButtonText: "Fazer login",
                confirmButtonColor: "#3085d6",
                showDenyButton: true,
                denyButtonText: "Cancelar"
            }).then((res) => {
                if (res.isConfirmed) {
                    navigate('/login')
                }
            });
        } else {
            api.post('/user/bookmark-recipe')
            console.log('bookmark', recipeId);
        }
    }
    return (
        <Container to={`/receita/${data.id}`} >
            <Img src={data.image} />
            <ShadowEffect />
            <TopBox>
                <Stars>
                    <AiTwotoneStar style={{color: '#FFF', width: '16px', height: '16px'}} />
                    <span>{isNaN(data.rating_sum / data.review_amount) ? 0 : data.rating_sum / data.review_amount}</span>
                </Stars>
                <SaveBoxIcon type="button" onClick={(e) => handleBookmarkRecipe(e, data.id)}>
                    <BsBookmarkDash style={{color: '#EE8B8B', width: '18px', height: '18px'}} />
                </SaveBoxIcon>
            </TopBox>
            <BottomBox>
                <Title>{data.name}</Title>
                <Infos>{data.ingredients_amount} Ingredients | {data.kitchen_time}</Infos>
            </BottomBox>
        </Container>
    )
}
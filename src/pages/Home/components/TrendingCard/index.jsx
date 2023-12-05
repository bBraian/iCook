import { useContext, useEffect, useState } from "react";
import { BottomBox, Container, Img, Infos, SaveBoxIcon, ShadowEffect, Stars, Title, TopBox } from "./styles";
import { AiTwotoneStar } from "react-icons/ai"
import { BsBookmarkDash } from "react-icons/bs"
import { AuthContext } from "../../../../context/AuthContext";
import { api } from "../../../../lib/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import TransparentLoading from "../../../../components/TransparentLoading";

export function TrendingCard({ data }) {
    const { user } = useContext(AuthContext)
    const [saved, setSaved] = useState(false)
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setSaved(data.saved)
    }, [data])

    function handleBookmarkRecipe(event, recipeId) {
        setIsSubmitting(true)
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
            api.post(`user/save-recipe/${recipeId}`)
            .then(() => {
                setIsSubmitting(false)
                setSaved(true)
            })
            .catch(() => {
                setIsSubmitting(false)
                Swal.fire({
                    title: "Erro!",
                    text: "Erro ao salvar receita",
                    icon: "error",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#3085d6"
                })
            })
        }
    }

    function handleUnbookmarkRecipe(event, recipeId) {
        setIsSubmitting(true)
        event.preventDefault();
        api.delete(`user/unsave-recipe/${recipeId}`)
        .then(() => {
            setIsSubmitting(false)
            setSaved(false)
        })
        .catch(() => {
            setIsSubmitting(false)
            Swal.fire({
                title: "Erro!",
                text: "Erro ao remover a receita salva",
                icon: "error",
                confirmButtonText: "Ok",
                confirmButtonColor: "#3085d6"
            })
        })
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
                <SaveBoxIcon saved={saved ? 'S' : 'N'} type="button" onClick={saved ? (e) => handleUnbookmarkRecipe(e, data.id) : (e) => handleBookmarkRecipe(e, data.id)}>
                    <BsBookmarkDash style={{color: saved ? '#FFF' : '#EE8B8B', width: '18px', height: '18px'}} />
                </SaveBoxIcon>
            </TopBox>
            <BottomBox>
                <Title>{data.name}</Title>
                <Infos>{data.ingredients_amount} Ingredients | {data.kitchen_time}</Infos>
            </BottomBox>
            {isSubmitting && <TransparentLoading />}
        </Container>
    )
}
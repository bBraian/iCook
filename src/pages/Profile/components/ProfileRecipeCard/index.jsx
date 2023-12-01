import { BottomBox, Container, EditBoxIcon, Img, IndicatorIcon, Infos, SaveBoxIcon, ShadowEffect, Stars, Title, TopBox } from "./styles";
import { AiTwotoneStar } from "react-icons/ai"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsBookmarkDash } from "react-icons/bs"
import { EditRecipeModal } from "../EditRecipeModal";
import { useState } from "react";
import TransparentLoading from "../../../../components/TransparentLoading";
import { api } from "../../../../lib/axios";
import { Toast } from "../../../../lib/toast";
import { FaLock } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";

export function ProfileRecipeCard({type, data, removeSavedRecipe}) {
    const [modalOpen, setModalOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    if(data == undefined) {
        return <></>
    }

    function handleUnsaveRecipe(event, recipeId) {
        event.preventDefault();
        setIsSubmitting(true)
        //unsave
        api.delete(`user/unsave-recipe/${recipeId}`)
        .then(() => {
            removeSavedRecipe(recipeId)
            setIsSubmitting(false)
            Toast.fire({
                icon: "success",
                title: "Receita removida com sucesso!"
            });
        })
        .catch(err => {
            console.log(err)
            setIsSubmitting(false)
            Toast.fire({
                icon: "error",
                title: "Erro ao remover receita"
            });
        })
    }

    function handleSaveUnsaveRecipe(event, recipeId) {
        event.preventDefault();
        // setIsSubmitting(true)
        // //unsave
        // api.delete(`user/unsave-recipe/${recipeId}`)
        // .then(() => {
        //     removeSavedRecipe(recipeId)
        //     setIsSubmitting(false)
        //     Toast.fire({
        //         icon: "success",
        //         title: "Receita removida com sucesso!"
        //     });
        // })
        // .catch(err => {
        //     console.log(err)
        //     setIsSubmitting(false)
        //     Toast.fire({
        //         icon: "error",
        //         title: "Erro ao remover receita"
        //     });
        // })
    }

    function handleOpenModal(event) {
        event.preventDefault();
        setModalOpen(true)
    }
    
    return (
        <>
            <Container to={`/receita/${data.id}`}>
                <Img src={data.image} />
                <ShadowEffect />
                <TopBox>
                    <Stars>
                        <AiTwotoneStar style={{color: '#FFF', width: '16px', height: '16px'}} />
                        <span>{isNaN(data.rating_sum / data.review_amount) ? 0 : data.rating_sum / data.review_amount}</span>
                    </Stars>
                    {type == 2 && (
                        <IndicatorIcon>
                            {data.private == 1 ? (
                                <FaLock style={{color: '#E23E3E', width: '18px', height: '18px'}} />
                            ) : (
                                <FaUnlock style={{color: '#31B057', width: '18px', height: '18px'}} />
                            )}
                        </IndicatorIcon>
                    )}
                    {type == 1 &&  (
                        <SaveBoxIcon onClick={(e) => handleUnsaveRecipe(e, data.id)}>
                            <BsBookmarkDash style={{color: '#FFF', width: '18px', height: '18px'}} />
                        </SaveBoxIcon>
                    )}
                    {type == 2 && (
                        <EditBoxIcon onClick={handleOpenModal}>
                            <BiDotsHorizontalRounded style={{color: '#E23E3E', width: '18px', height: '18px'}} />
                        </EditBoxIcon>
                    )}

                    {type == 3 &&  (
                        <SaveBoxIcon onClick={(e) => handleSaveUnsaveRecipe(e, data.id)}>
                            <BsBookmarkDash style={{color: '#FFF', width: '18px', height: '18px'}} />
                        </SaveBoxIcon>
                    )}
                    
                </TopBox>
                <BottomBox>
                    <Title>{data.name}</Title>
                    <Infos>{data.ingredients_amount} Ingredientes | {data.kitchen_time}</Infos>
                </BottomBox>
                {isSubmitting && <TransparentLoading />}
            </Container>
            <EditRecipeModal setModalOpen={setModalOpen} modalOpen={modalOpen} recipeData={data} />
        </>
    )
}
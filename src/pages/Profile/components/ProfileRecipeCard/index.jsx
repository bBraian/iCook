import { BottomBox, Container, EditBoxIcon, Img, Infos, SaveBoxIcon, ShadowEffect, Stars, Title, TopBox } from "./styles";
import { AiTwotoneStar } from "react-icons/ai"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsBookmarkDash } from "react-icons/bs"
import { EditRecipeModal } from "../EditRecipeModal";
import { useState } from "react";

export function ProfileRecipeCard({type, data}) {
    const [modalOpen, setModalOpen] = useState(false)

    if(data == undefined) {
        return <></>
    }
    
    return (
        <Container to={`/receita/${data.id}`}>
            <Img src={data.image} />
            <ShadowEffect />
            <TopBox>
                <Stars>
                    <AiTwotoneStar style={{color: '#FFF', width: '16px', height: '16px'}} />
                    <span>{isNaN(data.rating_sum / data.review_amount) ? 0 : data.rating_sum / data.review_amount}</span>
                </Stars>
                {type == 1 &&  (
                    <SaveBoxIcon>
                        <BsBookmarkDash style={{color: '#FFF', width: '18px', height: '18px'}} />
                    </SaveBoxIcon>
                )}
                {type == 2 && (
                    <EditBoxIcon onClick={() => setModalOpen(true)}>
                        <BiDotsHorizontalRounded style={{color: '#E23E3E', width: '18px', height: '18px'}} />
                    </EditBoxIcon>
                )}
                
            </TopBox>
            <BottomBox>
                <Title>{data.name}</Title>
                <Infos>{data.ingredients_amount} Ingredientes | {data.kitchen_time}</Infos>
            </BottomBox>
            <EditRecipeModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        </Container>
    )
}
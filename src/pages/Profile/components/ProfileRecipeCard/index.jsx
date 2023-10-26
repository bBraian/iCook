import { BottomBox, Container, EditBoxIcon, Img, Infos, SaveBoxIcon, ShadowEffect, Stars, Title, TopBox } from "./styles";
import { AiTwotoneStar } from "react-icons/ai"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsBookmarkDash } from "react-icons/bs"
import { EditRecipeModal } from "../EditRecipeModal";
import { useState } from "react";

export function ProfileRecipeCard({type}) {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <Container to="/receita">
            <Img src="https://img.freepik.com/fotos-premium/prato-de-comida-brasileira-em-fundo-fotografico_496782-1085.jpg" />
            <ShadowEffect />
            <TopBox>
                <Stars>
                    <AiTwotoneStar style={{color: '#FFF', width: '16px', height: '16px'}} />
                    <span>5,0</span>
                </Stars>
                {type == 1 ? (
                    <SaveBoxIcon>
                        <BsBookmarkDash style={{color: '#FFF', width: '18px', height: '18px'}} />
                    </SaveBoxIcon>
                ) : (
                    <EditBoxIcon onClick={() => setModalOpen(true)}>
                        <BiDotsHorizontalRounded style={{color: '#E23E3E', width: '18px', height: '18px'}} />
                    </EditBoxIcon>
                )}
                
            </TopBox>
            <BottomBox>
                <Title>Como fazer italiano espaguete em casa</Title>
                <Infos>12 Ingredients | 40 min</Infos>
            </BottomBox>
            <EditRecipeModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        </Container>
    )
}
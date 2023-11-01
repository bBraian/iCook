import { FiEdit3 } from "react-icons/fi"
import { Header } from "../../components/Header"
import { LargeButton } from "../../components/LargeButton"
import { CustomSwitch } from "./components/CustomSwitch"
import { Ingredients } from "./components/Ingredients"
import { ServesInput } from "./components/ServesInput"
import { Steps } from "./components/Steps"
import { Container, CookTimeBox, EditImage, Img, ImgContainer, InputTime, InputsBox, Row, Span, Title, TitleInput } from "./styles"
import { ServesModal } from "./components/ServesModal"
import { useState } from "react"
import { CategoryInput } from "./components/CategoryInput"
import { TypeInput } from "./components/TypeInput"


export function CreateRecipe() {
    const [modalOpen, setModalOpen] = useState(false)
    const [serves, setServes] = useState(1)
    const [categoryId, setCategoryId] = useState({id: 0, name: 'Selecione a categoria'})
    const [typeId, setTypeId] = useState(1)
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Title>Como fazer torrada francesa</Title>
                </Row>
                <ImgContainer>
                    <Img src="https://img.freepik.com/fotos-premium/prato-de-comida-brasileira-em-fundo-fotografico_496782-1085.jpg" />
                    <EditImage>
                        <FiEdit3 style={{color: '#E23E3E', width: '18px', height: '18px'}} />
                    </EditImage>
                </ImgContainer>
                <TitleInput placeholder="Título da receita" />

                <ServesInput serves={serves} onClick={() => setModalOpen(true)} />
                <CategoryInput categoryId={categoryId} setCategoryId={setCategoryId} />
                <TypeInput serves={serves} onClick={() => setModalOpen(true)} />

                <ServesModal modalOpen={modalOpen} setModalOpen={setModalOpen} serves={serves} setServes={setServes} />
                <InputsBox>
                    <CookTimeBox>
                        <Span>Tempo de cozinha</Span>
                        <InputTime type="time" />
                    </CookTimeBox>
                    <CustomSwitch />
                </InputsBox>
                <Ingredients />
                <Steps />
                <LargeButton text="Salvar Receita" config="primary" style={{width: '100%'}} />
            </Container>
        </>
    )
}
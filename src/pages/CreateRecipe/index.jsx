import { FiEdit3 } from "react-icons/fi"
import { Header } from "../../components/Header"
import { LargeButton } from "../../components/LargeButton"
import { CustomSwitch } from "./components/CustomSwitch"
import { Ingredients } from "./components/Ingredients"
import { ServesInput } from "./components/ServesInput"
import { Steps } from "./components/Steps"
import { Container, CookTimeBox, EditImage, Img, ImgContainer, InputTime, InputsBox, Row, Span, Title, TitleInput } from "./styles"


export function CreateRecipe() {
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
                <ServesInput />
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
import { FiEdit3 } from "react-icons/fi"
import { Header } from "../../components/Header"
import { LargeButton } from "../../components/LargeButton"
import { CustomSwitch } from "./components/CustomSwitch"
import { Ingredients } from "./components/Ingredients"
import { ServesInput } from "./components/ServesInput"
import { Steps } from "./components/Steps"
import { FormContainer, CookTimeBox, EditImage, Img, ImgContainer, InputTime, InputsBox, Row, Span, Title, TitleInput } from "./styles"
import { useState } from "react"
import { CategoryInput } from "./components/CategoryInput"
import { TypeInput } from "./components/TypeInput"
import { IsPrivateSwitch } from "./components/IsPrivateSwitch"


export function CreateRecipe() {
    const [title, setTitle] = useState("")
    const [serves, setServes] = useState(1)
    const [categoryId, setCategoryId] = useState({id: 0, name: 'Selecione a categoria'})
    const [typeId, setTypeId] = useState({id: 0, name: 'Selecione o tipo'})
    const [cookTime, setCookTime] = useState("")
    const [isPrivate, setIsPrivate] = useState(true)

    const [ingredientsList, setIngredientsList] = useState([{ id: 1, ingredient: { id: 0, name: 'Ingrediente' }, amount: ''}])
    const [stepsList, setStepsList] = useState([{ id: 1, text: ""}])

    function handleSaveRecipe(event) {
        event.preventDefault()

        const data = {
            title,
            image: 'https://img.freepik.com/fotos-premium/prato-de-comida-brasileira-em-fundo-fotografico_496782-1085.jpg',
            serves,
            categoryId: categoryId.id,
            typeId: typeId.id,
            cookTime,
            private: isPrivate,
            ingredients: [...ingredientsList],
            steps: [...stepsList],
        }

        console.log(data)
    }
    return (
        <>
            <Header />
            <FormContainer onSubmit={handleSaveRecipe}>
                <ImgContainer>
                    <Img src="https://img.freepik.com/fotos-premium/prato-de-comida-brasileira-em-fundo-fotografico_496782-1085.jpg" />
                    <EditImage type="button">
                        <FiEdit3 style={{color: '#E23E3E', width: '18px', height: '18px'}} />
                    </EditImage>
                </ImgContainer>
                <TitleInput placeholder="Título da receita" value={title} onChange={(e) => setTitle(e.target.value)} />

                <ServesInput serves={serves} setServes={setServes} />
                <CategoryInput categoryId={categoryId} setCategoryId={setCategoryId} />
                <TypeInput typeId={typeId} setTypeId={setTypeId} />

                <InputsBox>
                    <CookTimeBox>
                        <Span>Tempo de cozinha</Span>
                        <InputTime type="time" value={cookTime} onChange={(e) => setCookTime(e.target.value)} />
                    </CookTimeBox>
                    <IsPrivateSwitch isPrivate={isPrivate} setIsPrivate={setIsPrivate} />
                </InputsBox>
                <Ingredients ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} />
                <Steps stepsList={stepsList} setStepsList={setStepsList} />
                <LargeButton text="Salvar Receita" type="submit" config="primary" style={{width: '100%'}} />
            </FormContainer>
        </>
    )
}
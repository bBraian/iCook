import { FiEdit3 } from "react-icons/fi"
import { Header } from "../../components/Header"
import { LargeButton } from "../../components/LargeButton"
import { CustomSwitch } from "./components/CustomSwitch"
import { Ingredients } from "./components/Ingredients"
import { ServesInput } from "./components/ServesInput"
import { Steps } from "./components/Steps"
import { FormContainer, CookTimeBox, EditImage, Img, ImgContainer, InputTime, InputsBox, Row, Span, Title, TitleInput } from "./styles"
import { useContext, useEffect, useState } from "react"
import { CategoryInput } from "./components/CategoryInput"
import { TypeInput } from "./components/TypeInput"
import { IsPrivateSwitch } from "./components/IsPrivateSwitch"
import { AuthContext } from "../../context/AuthContext"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import Loading from "../../components/Loading"
import { api } from "../../lib/axios"
import { TransparentLoading } from "../../components/TransparentLoading"


export function CreateRecipe() {
    const [title, setTitle] = useState("")
    const [serves, setServes] = useState(1)
    const [categoryId, setCategoryId] = useState({id: 0, name: 'Selecione a categoria'})
    const [typeId, setTypeId] = useState({id: 0, name: 'Selecione o tipo'})
    const [cookTime, setCookTime] = useState("")
    const [isPrivate, setIsPrivate] = useState(true)
    const { user, loading } = useContext(AuthContext)
    const [postRecipe, setPostRecipe] = useState(false);
    const navigate = useNavigate()

    const [ingredientsList, setIngredientsList] = useState([{ id: 1, ingredientId: 0, ingredientImg: '', ingredientName: 'Clique para selecionar', amount: ''}])
    const [stepsList, setStepsList] = useState([{ id: 1, text: ""}])

    useEffect(() => {
        if(!user && !loading) {
            Swal.fire({
                title: "É preciso estar logado para criar uma receita!",
                text: "Faça login para continuar",
                icon: "warning",
                confirmButtonText: "Fazer login",
                confirmButtonColor: "#3085d6",
                showDenyButton: true,
                denyButtonText: "Voltar para Home"
            }).then((res) => {
                if (res.isConfirmed) {
                    navigate('/login')
                } else {
                    navigate('/')
                }
            });
        }
    }, [user])

    function handleSaveRecipe(event) {
        event.preventDefault()
        setPostRecipe(true)

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

        api.post('/recipe', data)
        .then((res) => {
            console.log(res)
            setPostRecipe(false)
            if(res.data.id) {
                Swal.fire({
                    title: "Receita criada com sucesso!",
                    icon: "success",
                    confirmButtonText: "Ir para a receita",
                    confirmButtonColor: "#3085d6",
                }).then(() => {
                    navigate(`/receita/${res.data.id}`)
                });
            } else {
                Swal.fire({
                    title: "Atenção!",
                    text: "Erro ao criar receita",
                    icon: "warning",
                    confirmButtonText: "ok",
                    confirmButtonColor: "#3085d6",
                })
            }
        })
        .catch((err) => {
            setPostRecipe(false)
            Swal.fire({
                title: "Atenção!",
                text: err.response.data.message,
                icon: "warning",
                confirmButtonText: "ok",
                confirmButtonColor: "#3085d6",
            })
            console.log(err)
        })
    }

    if(loading) {
        return (
            <Loading />
        )
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
            {postRecipe && <TransparentLoading /> }
        </>
    )
}
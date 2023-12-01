import { Header } from "../../components/Header"
import { LargeButton } from "../../components/LargeButton"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { api } from "../../lib/axios"
import { TransparentLoading } from "../../components/TransparentLoading"
import Loading from "../../components/Loading"
import styled from "styled-components"


export function CreateIngredient() {
    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const { user, loading } = useContext(AuthContext)
    const [postIngredient, setPostIngredient] = useState(false);
    const navigate = useNavigate()

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

    function handleSaveIngredient(event) {
        event.preventDefault()
        setPostIngredient(true)

        api.post('/ingredients', { name: name, image: imageUrl, user_created: user.name })
        .then((res) => {
            console.log(res)
            setPostIngredient(false)
            if(res.data.id) {
                Swal.fire({
                    title: name,
                    text: "Ingrediente criado com sucesso!",
                    imageUrl: imageUrl,
                    imageWidth: 350,
                    imageHeight: 350,
                    imageAlt: "Custom image"
                });
            } else {
                Swal.fire({
                    title: "Atenção!",
                    text: "Erro ao criar Ingrediente",
                    icon: "warning",
                    confirmButtonText: "ok",
                    confirmButtonColor: "#3085d6",
                })
            }
        })
        .catch((err) => {
            setPostIngredient(false)
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
            <FormContainer onSubmit={handleSaveIngredient}>
                <Title>Criar Ingrediente</Title>
                <TitleInput placeholder="Nome do ingrediente" required value={name} onChange={(e) => setName(e.target.value)} />
                <TitleInput placeholder="URL da imagem" required value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                <LargeButton text="Criar ingrediente" type="submit" config="primary" style={{width: '100%', marginTop: '16px'}} />
            </FormContainer>
            {postIngredient && <TransparentLoading /> }
        </>
    )
}

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    max-width: 900px;
    margin: 92px auto 2rem auto;
`
const TitleInput = styled.input`
    margin-top: 20px;
    border: 1px solid ${props => props.theme['neutral-20']};
    border-radius: 10px;
    height: 44px;
    padding: 8px 1rem;
    width: 100%;

    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`
const Title = styled.div`
    color: ${props => props.theme['neutral-90']};
    font-size: 24px;
    font-weight: 600;
    line-height: 28.80px;
    word-wrap: break-word;
`
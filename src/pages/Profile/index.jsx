import { Header } from "../../components/Header";
import { Avatar, Button, Container, Row } from "./styles";

export function Profile() {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Avatar src="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg" />
                    <Button>Editar perfil</Button>
                </Row>
            </Container>
        </>
    )
}
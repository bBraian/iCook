import styled from "styled-components"

export function ServesModal() {
    return (
        <Container>
            <Header>
                <Box>
                    <IconBox>

                    </IconBox>
                    <Text></Text>
                </Box>
                <CloseButton>

                </CloseButton>
            </Header>
            <ServesCounterList>
                <Item>1</Item>
                <Item>2</Item>
                <Item>3</Item>
            </ServesCounterList>
        </Container>
    )
}

const Container = styled.div``
const Header = styled.div``
const Box = styled.div``
const IconBox = styled.div``
const Text = styled.span``
const CloseButton = styled.button``
const ServesCounterList = styled.div``
const Item = styled.div``
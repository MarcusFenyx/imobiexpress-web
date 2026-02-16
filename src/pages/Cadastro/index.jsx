import React from 'react';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label  } from './styles';

const Cadastro = () => {
    return(
        <Container>
            <h2>Crie sua conta</h2>
            <p>Cadastre-se para acessar a plataforma!</p>
            <ContainerForm>
                <Form>
                    <Label>Nome</Label>
                    <Input type="text" placeholder="Informe seu Nome"/>
                    <Label>E-mail</Label>
                    <Input type="text" placeholder="Informe seu E-mail"/>
                    <Label>Senha</Label>
                    <Input type="text" placeholder="Informe sua Senha"/>
                    <Button>Fazer Cadastro</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Cadastro;
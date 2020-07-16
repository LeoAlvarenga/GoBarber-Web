import React from "react";

import { Container, Content, Background } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Form } from "@unform/web";

import LogoImg from "../../assets/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => {

  function handleSubmit(data: Object) {
    console.log(data)
  }

  return (
    <Container>
      <Background></Background>
      <Content>
        <img src={LogoImg} alt="Go Barber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Password" />

          <Button type="submit">Cadastrar</Button>

        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;

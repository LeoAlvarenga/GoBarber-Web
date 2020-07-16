import React from "react";

import { Container, Content, Background } from "./styles";
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import LogoImg from "../../assets/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background></Background>
      <Content>
        <img src={LogoImg} alt="Go Barber" />

        <form action="">
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Password" />

          <Button type="submit">Cadastrar</Button>

        </form>
        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;

import React from "react";

import { Container, Content, Background } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import LogoImg from "../../assets/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Go Barber" />

        <form action="">
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Password" />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="#">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background></Background>
    </Container>
  );
};

export default SignIn;

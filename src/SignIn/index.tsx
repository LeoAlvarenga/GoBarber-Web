import React from "react";

import { Container, Content, Background } from "./styles";
import { FiLogIn } from "react-icons/fi";

import LogoImg from "../assets/logo.svg";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Go Barber" />

        <form action="">
          <h1>Faça seu logon</h1>

          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />

          <button type="submit">Entrar</button>

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

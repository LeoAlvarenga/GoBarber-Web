import React, { useCallback, useRef, useContext } from "react";

import { Container, Content, Background } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Form } from '@unform/web';
import * as Yup from 'yup'

import { useAuth } from '../../hooks/AuthContext'

import LogoImg from "../../assets/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormHandles } from "@unform/core";
import getValidationErrors from "../../utils/getValidationErrors";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const { user ,signIn } = useAuth()

  console.log(user)

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail Obrigatório")
          .email("Digite um E-mail válido"),
        password: Yup.string()
          .required("Senha Obrigatória")
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({
        email: data.email,
        password: data.password
      })
    } catch (error) {
      console.log(error);

      const validationErrors = getValidationErrors(error)
      formRef.current?.setErrors(validationErrors);
    }
  }, [signIn]);

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Go Barber" />

        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Password" />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
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

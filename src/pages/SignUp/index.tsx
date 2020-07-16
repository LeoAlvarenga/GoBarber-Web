import React, { useCallback, useRef } from "react";

import { Container, Content, Background } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErrors from '../../utils/getValidationErrors'

import LogoImg from "../../assets/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: Object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome Obrigatório"),
        email: Yup.string()
          .required("E-mail Obrigatório")
          .email("Digite um E-mail válido"),
        password: Yup.string()
          .required("Senha Obrigatória")
          .min(6, "Senha deve conter no minímo 6 dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);

      const validationErrors = getValidationErrors(error)
      formRef.current?.setErrors(validationErrors);
    }
  }, []);

  return (
    <Container>
      <Background></Background>
      <Content>
        <img src={LogoImg} alt="Go Barber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

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

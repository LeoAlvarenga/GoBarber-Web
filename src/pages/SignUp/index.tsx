import React, { useCallback, useRef } from "react";

import { Container, Content, Background, AnimatedContainer } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import api from '../../services/api'

import LogoImg from "../../assets/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import { useToast } from "../../hooks/toast";

interface SignUpFormData {
  name: string;
  password: string;
  email: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast()
  const history = useHistory()

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

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

      await api.post('/users', data)

      history.push('/')

      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso',
        description: 'Cadastro realizado, agora você pode efetuar o login no GoBarber.'
      })
    } catch (error) {
      console.log(error);
      if (error instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(error);
        formRef.current?.setErrors(validationErrors);
      }

      addToast({
        type: "error",
        title: "Erro np cadastro",
        description: "Ocorreu um erro ao tentar fazer o cadastro, tente novamente mais tarde.",
      });
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <AnimatedContainer>
          <img src={LogoImg} alt="Go Barber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default SignUp;

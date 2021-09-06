import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";
const index = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Tina</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel html="for">Email</FormLabel>
            <FormInput tpe="email" required />
            <FormLabel html="for">Password</FormLabel>
            <FormInput tpe="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default index;

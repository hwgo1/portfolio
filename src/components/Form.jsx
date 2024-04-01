"use client";

import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import Heading from "./Heading";
import { FiAlertOctagon, FiMail } from "react-icons/fi";

function Form() {
  const initValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const initState = { values: initValues };

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const { values, isLoading } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
  };

  return (
    <Container maxW="450px">
        <div className="rounded-2xl backdrop-blur-md bg-opacity-45 border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-16">
      <Heading as="h2" size="sm" className="mb-4">
        Vamos conversar!
      </Heading>

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel>Nome</FormLabel>
        <Input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          autoComplete="off"
          onBlur={onBlur}
        />
        <FormErrorMessage className="gap-2">
          <FiAlertOctagon /> O campo deve ser preenchido.
        </FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="off"
          onBlur={onBlur}
        />
        <FormErrorMessage className="gap-2">
          <FiAlertOctagon /> O campo deve ser preenchido.
        </FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.subject && !values.subject}
        mb={5}
      >
        <FormLabel>Assunto</FormLabel>
        <Input
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          autoComplete="off"
          onBlur={onBlur}
        />
        <FormErrorMessage className="gap-2">
          <FiAlertOctagon /> O campo deve ser preenchido.
        </FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={5}
      >
        <FormLabel>Menssagem</FormLabel>
        <Textarea
          type="text"
          name="message"
          value={values.message}
          onChange={handleChange}
          autoComplete="off"
          rows={4}
          onBlur={onBlur}
        />
        <FormErrorMessage className="gap-2">
          <FiAlertOctagon /> O campo deve ser preenchido.
        </FormErrorMessage>
      </FormControl>

      <Button
        variant="outline"
        onClick={onSubmit}
        isLoading={isLoading}
        colorScheme="blue"
        leftIcon={<FiMail />}
        isDisabled = {!values.email || !values.name || !values.subject || !values.message}
      >
        Enviar
      </Button>
      </div>
    </Container>
  );
}

export default Form;

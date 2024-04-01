"use client";

import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { FiAlertOctagon, FiMail } from "react-icons/fi";
import Heading from "./Heading";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Form(): JSX.Element {
  const initValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const initState = { values: initValues };

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onBlur = ({
    target,
  }: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const { values } = state;

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const toast = useToast();

  const onSubmit = async (): Promise<void> => {
    setIsLoading(true);

    toast({
      title: "Desculpe pelo inconveniente",
      description:
        "Atualmente estou enfrentando problemas técnicos com o formulário de contato. Por favor, entre em contato comigo diretamente por email. Agradeço sua compreensão.",
      status: "error",
      duration: 9000,
      isClosable: true,
      onCloseComplete: () => setIsLoading(false),
    });
  };

  return (
    <Container maxW="450px">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 bg-opacity-45 px-4 py-10 backdrop-blur-md md:px-8 md:py-16">
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

        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb={5}
        >
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
          <FormLabel>Mensagem</FormLabel>
          <Textarea
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
          isDisabled={
            !values.email || !values.name || !values.subject || !values.message
          }
        >
          Enviar
        </Button>
      </div>
    </Container>
  );
}

export default Form;

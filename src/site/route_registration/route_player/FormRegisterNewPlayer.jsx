import * as React from "react";
import styled from "styled-components";
import {
  useForm,
  FormProvider,
  TextInput_0,
  IconButton,
  IconButtonIcon,
  IconButtonText,
} from "react_utils";
import { ReactComponent as SaveIcon } from "agent_factory.shared/ui/icons/save_1.svg";
import { useContextRegistration } from "/src/stores/registration/index.js";

const TextInput = styled(TextInput_0)`
  text-transform: uppercase !important;
  & > * {
    font-size: var(--tx-sm) !important;
  }
`;

const StyleIconButton = styled(IconButton)`
  box-sizing: content-box;
  font-size: var(--tx-sm);
  text-transform: lowercase;
  width: 50px;
  height: 50px;
  padding: 10px;
`;

function FormRegisterNewPlayer({ className }) {
  const { registerPlayer } = useContextRegistration();
  const [form, setForm] = useForm({
    submitting: false,
    fields: {
      name: "",
      surname: "",
      email: "",
      username: "",
      password: "",
    },
  });

  React.useEffect(() => {
    if (!form.submitting) return;
    registerPlayer(form.fields)
      .then((res) => {
        setForm("reset");
        document.activeElement.blur();
      })
      .catch(({ validationErrors, modelError }) => {
        if (validationErrors) {
          setForm("setErrors", validationErrors);
        }
      })
      .finally(() => setForm("setSubmit", false));
  }, [form.submitting]);

  return (
    <FormProvider value={{ ...form, setForm }}>
      <form
        className={className}
        id="form-register-new-player"
        onSubmit={(e) => {
          e.preventDefault();
          setForm("setSubmit", true);
        }}
      >
        <legend>register player</legend>
        <TextInput name="name" label="first name" />
        <TextInput name="surname" label="last name" />
        <TextInput name="email" type="email" />
        <TextInput name="username" />
        <TextInput optional name="password" type="password" />
        <StyleIconButton
          form="form-register-new-player"
          type="submit"
          disabled={form.submitting}
        >
          <IconButtonIcon>
            <SaveIcon />
          </IconButtonIcon>
          <IconButtonText>register</IconButtonText>
        </StyleIconButton>
      </form>
    </FormProvider>
  );
}

export { FormRegisterNewPlayer };

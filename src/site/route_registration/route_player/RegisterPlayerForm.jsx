import * as React from "react";
import { useAppCtx } from "/src/app/index.js";
import {
  useForm,
  FormProvider,
  TextInput_0,
  IconButton,
  IconButtonIcon,
  IconButtonText,
} from "react_utils";
import { ReactComponent as SaveIcon } from "agent_factory.shared/ui/icons/save_1.svg";
import styled from "styled-components";

const TextInput = styled(TextInput_0)`
  text-transform: uppercase !important;
  & > * {
    font-size: var(--tx-sm) !important;
  }
`;

function RegisterPlayerForm({ className }) {
  const { registerPlayer } = useAppCtx();
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
        id="registerPlayerForm"
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
        <IconButton
          form="registerPlayerForm"
          type="submit"
          disabled={form.submitting}
        >
          <IconButtonIcon>
            <SaveIcon />
          </IconButtonIcon>
          <IconButtonText>save</IconButtonText>
        </IconButton>
      </form>
    </FormProvider>
  );
}

export { RegisterPlayerForm };

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

const TextInput = styled(TextInput_0)`
  text-transform: uppercase !important;
  & > * {
    font-size: var(--tx-sm) !important;
  }
`;

const StyleIconButton = styled(IconButton)`
  box-sizing: content-box;
  font-size: var(--tx-nl);
  text-transform: uppercase;
  width: 70px;
  height: 70px;
  padding: 10px;
`;

function FormPlayer({ onSubmit, className, ...props }) {
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
    onSubmit(form.fields)
      .then((res) => {
        setForm("reset");
        document.activeElement.blur();
      })
      .catch((err) => {
        if (err.validationErrors) {
          setForm("setErrors", err.validationErrors);
        }
      })
      .finally(() => setForm("setSubmit", false));
  }, [form.submitting]);

  return (
    <FormProvider value={{ ...form, setForm }}>
      <form
        className={className}
        id="form-player"
        onSubmit={(e) => {
          e.preventDefault();
          setForm("setSubmit", true);
        }}
        {...props}
      >
        <legend>register player</legend>
        <TextInput name="name" label="first name" />
        <TextInput name="surname" label="last name" />
        <TextInput name="email" type="email" />
        <TextInput name="username" />
        <TextInput optional name="password" type="password" />
        <StyleIconButton
          form="form-player"
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

export { FormPlayer };
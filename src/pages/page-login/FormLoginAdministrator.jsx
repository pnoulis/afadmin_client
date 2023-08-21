// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { useForm, FormProvider, TextInput_0 } from "react_utils";
// ------------------------------ project  ------------------------------- //
import { Button } from "/src/components/buttons/index.js";

function FormLoginAdministrator({ onSubmit, className }) {
  const [form, setForm] = useForm({
    submitting: false,
    fields: {
      username: "",
      password: "",
    },
  });

  React.useEffect(() => {
    if (!form.submitting) return;
    onSubmit(form.fields, () => setForm("reset"));
  });

  return (
    <FormProvider value={{ ...form, setForm }}>
      <StyleForm
        className={className}
        id="form-login-administrator"
        onSubmit={(e) => {
          e.preventDefault();
          setForm("setSubmit", true);
        }}
      >
        <TextInput name="username" />
        <TextInput
          type="password"
          name="password"
          autoComplete="new-password"
        />
        <StyleButton
          type="submit"
          form="form-login-administrator"
          disabled={form.submitting}
        >
          log in
        </StyleButton>
      </StyleForm>
    </FormProvider>
  );
}

const StyleButton = styled(Button)`
  font-size: var(--tx-lg);
  text-transform: uppercase;
  background-color: var(--primary-base);
  height: 60px;
  border-radius: var(--br-sm);
  width: 100%;
  cursor: pointer;
  letter-spacing: 1px;
  text-align: center;
  color: white;
  font-weight: 500;
  &:hover {
    opacity: 0.9;
  }
`;

const StyleForm = styled("form")`
  z-index: 2;
  display: flex;
  width: 330px;
  flex-flow: column nowrap;
  row-gap: 40px;
`;
const TextInput = styled(TextInput_0)`
  background-color: white;
  text-transform: uppercase !important;
  & > * {
    font-size: var(--tx-sm) !important;
  }

  border-radius: var(--br-sm);
  & .label {
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & input {
    border-color: white !important;
    border-radius: var(--br-lg);
  }
`;

export { FormLoginAdministrator };

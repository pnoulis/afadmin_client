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
  }, [form.submitting]);

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
  border-radius: var(--br-nl);
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
  font-family: Saira;
  font-weight: 500;

  row-gap: 40px;
`;
const TextInput = styled(TextInput_0)`
  text-transform: uppercase !important;
  & > * {
    font-size: var(--tx-sm) !important;
  }

  & .label {
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & input {
    background-color: white;
    border-color: white !important;
    border-radius: var(--br-nl);
  }

  .input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    background-color: white;
    left: 0;
    transform: translate(1px, -50%);
  }

  .input:focus ~ .optional,
  input:not(:placeholder-shown) ~ .optional {
    right: 1px;
    background-color: white;
  }
`;

export { FormLoginAdministrator };

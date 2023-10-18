// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { useForm, FormProvider, TextInput_0 } from "react_utils";
// ------------------------------ project  ------------------------------- //
import { Button } from "/src/components/buttons/index.js";
import { ComboboxSelectCashierRole } from "./ComboboxSelectCashierRole.jsx";

function FormCreateCashier({ onSubmit, className, style }) {
  const [form, setForm] = useForm({
    submitting: false,
    fields: {
      username: "",
      email: "",
      password: "",
      role: "",
    },
  });

  React.useEffect(() => {
    if (!form.submitting) return;
    onSubmit(form.fields, setForm);
  }, [form.submitting]);

  return (
    <FormProvider value={{ ...form, setForm }}>
      <StyleForm
        className={className}
        id="form-create-cashier"
        onSubmit={(e) => {
          e.preventDefault();
          setForm("setSubmit", true);
        }}
      >
        <TextInput autoFocus={true} autoComplete="off" name="username" label="username" />
        <TextInput autoComplete="off" name="email" label="email" type="email" />
        <TextInput
          autoComplete="new-password"
          name="password"
          label="password"
          type="password"
        />
        <ComboboxSelectCashierRole
          onSelect={(role) => {
            !form.submitting && setForm("setInput", "role", role);
          }}
        />
        <StyleButton
          type="submit"
          form="form-create-cashier"
          disabled={form.submitting}
        >
          register cashier
        </StyleButton>
      </StyleForm>
    </FormProvider>
  );
}

const StyleForm = styled("form")`
  unset: all;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  width: 350px;
  align-items: center;
  gap: 20px;
  font-family: Saira;
  font-weight: 500;
  margin: auto;
`;

const StyleButton = styled("button")`
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
    background-color: var(--grey-light);
    border-color: white !important;
    border-radius: var(--br-nl);
  }

  .input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    background-color: var(--grey-light);
    left: 0;
    transform: translate(1px, -50%);
  }

  .input:focus ~ .optional,
  input:not(:placeholder-shown) ~ .optional {
    right: 1px;
    background-color: var(--grey-light);
  }
`;

export { FormCreateCashier };

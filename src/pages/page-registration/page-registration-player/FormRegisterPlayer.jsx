// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { useForm, FormProvider, TextInput_0 } from "react_utils";
// ------------------------------ project  ------------------------------- //
import { ButtonIconText } from "/src/components/buttons/index.js";
import { ReactComponent as RegisterIcon } from "agent_factory.shared/ui/new-icons/register-icon-black.svg";

function FormRegisterPlayer({ onSubmit, className }) {
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
    onSubmit(form.fields, setForm);
  });

  return (
    <FormProvider value={{ ...form, setForm }}>
      <StyleForm
        className={className}
        id="form-register-player"
        onSubmit={(e) => {
          e.preventDefault();
          setForm("setSubmit", true);
        }}
      >
        <TextInput name="name" label="first name" />
        <TextInput name="surname" label="last name" />
        <TextInput name="email" type="email" />
        <TextInput name="username" />
        <TextInput
          optional
          name="password"
          type="password"
          autoComplete="new-password"
        />
        <StyleButton>
          <ButtonIconText.Icon>
            <RegisterIcon />
          </ButtonIconText.Icon>
          <ButtonIconText.Text>register</ButtonIconText.Text>
        </StyleButton>
      </StyleForm>
    </FormProvider>
  );
}

const StyleButton = styled("button")`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 10px 5px 10px;
  cursor: pointer;
  background-color: var(--primary-base);
  border-radius: var(--br-nl);
  color: white;

  &:hover {
    opacity: 0.8;
  }

  ${ButtonIconText.Icon} {
    width: 40px;
    height: 40px;
    fill: white;
    position: relative;
    left: 5px;
  }

  ${ButtonIconText.Text} {
    font-size: var(--tx-xs);
  }
`;

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

export { FormRegisterPlayer };

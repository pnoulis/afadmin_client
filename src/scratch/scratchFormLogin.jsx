import * as React from "react";
import styled from "styled-components";
import {
  useForm,
  FormProvider,
  TextInput_0,
  IconButton,
  IconButtonText,
} from "react_utils";

function FormLogin({ className, ...props }) {
  const [form, setForm] = useForm({
    submitting: false,
    fields: {
      username: "",
      password: "",
    },
  });

  React.useEffect(() => {
    if (!form.submitting) return;
    //  login player
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
        <legend>login administrator</legend>
        <TextInput name="username" />
        <TextInput type="password" name="password" />
        <StyleIconButton
          form="form-login-administrator"
          type="submit"
          disabled={form.submitting}
        >
          <IconButtonText>login</IconButtonText>
        </StyleIconButton>
      </StyleForm>
    </FormProvider>
  );
}

const StyleForm = styled.form`
  z-index: 2;
  display: flex;
  width: 350px;
  flex-flow: column nowrap;
  row-gap: 15px;

  & legend {
    display: none;
  }
`;

const StyleIconButton = styled(IconButton)`
  font-size: var(--tx-lg);
  text-transform: uppercase;
  width: 100%;
  letter-spacing: 1px;
  &:hover {
    opacity: 0.9;
  }
`;

const TextInput = styled(TextInput_0)`
  background-color: white;
  text-transform: uppercase !important;
  & > * {
    font-size: var(--tx-sm) !important;
  }
  border-radius: var(--br-lg);
  & input {
    border-color: white !important;
    border-radius: var(--br-lg);
  }
`;

export default function ScratchFormLogin() {
  return (
    <div
    style={{backgroundColor: "black", width: "100%", height: "100%"}}
    >
      <h1>scratch form login</h1>
    <div display={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <FormLogin />
      </div>
    </div>
  );
}

export { FormLogin };

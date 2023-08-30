// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils";
import { useForm, FormProvider, TextInput_0 } from "react_utils";
// ------------------------------ project  ------------------------------- //
import { Button } from "/src/components/buttons/index.js";

function FormGroupPartySize({
  onSubmit,
  fields: initialValues = {},
  legend,
  className,
  style,
}) {
  const [form, setForm] = useForm({
    formId: "form-group-party-size",
    submitting: false,
    errors: {},
    fields: {
      size: "",
      ...initialValues,
    },
  });

  React.useEffect(() => {
    if (!form.submitting) return;
    isFunction(onSubmit) && onSubmit(form.fields.size || 6);
    setForm("reset");
  }, [form.submitting]);

  return (
    <FormProvider value={{ ...form, setForm }}>
      <StyledForm
        id={form.formId}
        className={className}
        style={style}
        onSubmit={(e) => {
          e.preventDefault();
          if (/^[1-9][0-9]*/.test(form.fields.size || 6)) {
            setForm("setSubmit", true);
          } else {
            setForm("setErrors", {
              size: "Wrong number of players",
            });
          }
        }}
      >
        {legend && <StyledLegend className="legend">{legend}</StyledLegend>}
        <StyledTextInput
          name="size"
          label="number of players"
          placeholder={6}
          tabIndex={1}
        />
        <StyledButton type="submit" form={form.formId}>
          new group party
        </StyledButton>
      </StyledForm>
    </FormProvider>
  );
}

const StyledForm = styled("form")`
  color: black;
  box-sizing: border-box;
  unset: all;
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  width: 400px;
  font-family: Saira;
  font-weight: 550;
`;

const StyledLegend = styled("legend")`
  color: var(--primary-base);
  font-size: var(--tx-xxh);
  letter-spacing: 1.5px;
  text-transform: capitalize;
  letter-spacing: 2px;
`;

const StyledTextInput = styled(TextInput_0)`
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

const StyledButton = styled(Button)`
  margin: auto;
  font-size: var(--tx-nl);
  text-transform: uppercase;
  background-color: var(--primary-base);
  border-radius: var(--br-nl);
  width: max-content;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 10px 15px;
  text-align: center;
  color: white;
  font-weight: 500;
  &:hover {
    opacity: 0.9;
  }
`;

export { FormGroupPartySize };

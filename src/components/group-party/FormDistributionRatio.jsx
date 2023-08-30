// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { isFunction } from "js_utils";
import { useForm, FormProvider, TextInput_0 } from "react_utils";
// ------------------------------ project  ------------------------------- //
import { MAX_TEAM_SIZE } from "agent_factory.shared/constants.js";

const ratioRegex = new RegExp(`^[2-${MAX_TEAM_SIZE}]$`);

function FormDistributionRatio({
  onSubmit,
  fields: initialValues = {},
  legend,
  className,
  style,
}) {
  const [form, setForm] = useForm({
    formId: "form-distribution-ratio",
    submitting: false,
    errors: {},
    fields: {
      ratio: "",
      initialValues,
    },
  });

  React.useEffect(() => {
    if (!form.submitting) return;
    isFunction(onSubmit) && onSubmit(form.fields.ratio || 2);
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
          if (ratioRegex.test(form.fields.ratio || 2)) {
            setForm("setSubmit", true);
          } else {
            setForm("setErrors", {
              ratio: "Ratio must be a number between 2 and 6",
            });
          }
        }}
      >
        {legend && <StyledLegend className="legend">{legend}</StyledLegend>}
        <StyledTextInput
          name="ratio"
          label="distribution ratio"
          placeholder={2}
        />
      </StyledForm>
    </FormProvider>
  );
}

const StyledForm = styled("form")`
  color: black;
  margin: auto;
  box-sizing: border-box;
  unset: all;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
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

export { FormDistributionRatio };

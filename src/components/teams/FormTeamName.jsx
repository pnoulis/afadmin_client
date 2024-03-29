// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
import styled from "styled-components";
// ------------------------------ own libs ------------------------------- //
import { generateRandomName, isFunction } from "js_utils";
import { useForm, FormProvider, SimpleInput } from "react_utils";
// ------------------------------ project  ------------------------------- //

function FormTeamName({
  onSubmit,
  fields: initialValues = {},
  onChange,
  legend,
  className,
  style,
}) {
  const [form, setForm] = useForm({
    formId: "form-team-name",
    randomName: generateRandomName(),
    submitting: false,
    fields: {
      teamName: "",
      ...initialValues,
    },
  });

  React.useEffect(() => {
    isFunction(onChange) &&
      onChange(
        form.fields.teamName || {
          placeholder: form.randomName,
        },
      );
  }, [form.fields]);

  return (
    <FormProvider value={{ ...form, setForm }}>
      <StyledForm
        id={form.formId}
        className={className}
        style={style}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {legend && <StyledLegend className="legend">{legend}</StyledLegend>}
        <TextInput name="teamName" placeholder={form.randomName} />
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
  min-width: 250px;
  gap: 10px;
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

const TextInput = styled(SimpleInput)`
  all: unset;
  display: block;
  box-sizing: border-box;
  width: 100%;
  text-transform: uppercase;

  & input {
    height: 55px;
    width: 100%;
    padding: 0 6px;
    border-radius: var(--br-nl);
    background-color: var(--grey-light);
    text-align: center;
    letter-spacing: 1.5px;
    outline: none;
  }
`;

export { FormTeamName };

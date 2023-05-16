import * as React from "react";
import styled from "styled-components";
import { useForm, FormProvider, SimpleInput } from "react_utils";

const StyledForm = styled.form`
  grid-area: description;
  box-sizing: content-box;
  width: 400px;
  height: 150px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledSimpleInput = styled(SimpleInput)`
  all: unset;
  display: block;
  box-sizing: border-box;
  width: 90%;
  min-height: 60px;
  height: max-content;
  pointer-events: none;
  position: relative;
  text-align: center;
  font-family: Roboto-Bold;
  text-transform: uppercase;
  color: var(--info-medium);

  .input {
    pointer-events: auto;
    width: 100%;
    height: 55px;
    padding: 0 6px;
    border-radius: var(--br-nl);
    border: 2px solid var(--black-base);
    font-size: var(--tx-sm);
    text-align: center;
    letter-spacing: 1.5px;
    outline: none;
    color: black;
  }

  .input::placeholder {
    color: var(--info-medium);
    opacity: 1;
  }
`;

function FormTeamName({ teamName, onChange, className }) {
  const [form, setForm] = useForm({
    submitting: false,
    fields: {
      teamName: "",
    },
  });
  return (
    <FormProvider value={{ ...form, setForm }}>
      <StyledForm id={`${teamName}-name-form`} className={className}>
        <StyledSimpleInput
          name="teamName"
          placeholder={teamName}
          onChange={(value) => onChange(value || teamName)}
        />
      </StyledForm>
    </FormProvider>
  );
}

export { FormTeamName };

import * as React from "react";
import styled from "styled-components";
import { useForm, FormProvider, SimpleInput } from "react_utils";
import { generateRandomName } from "js_utils";

function FormNewTeamName({ onSubmit, className }) {
  const [form, setForm] = useForm({
    randomName: generateRandomName(),
    submitting: false,
    fields: {
      teamName: "",
    },
  });

  React.useEffect(() => {
    if (!form.submitting) return;
    onSubmit(form.fields.teamName || form.randomName, (isTeamCreated) => {
      if (!isTeamCreated) {
        setForm("setSubmit", false);
        document.getElementById("teamName").focus();
      }
    });
  }, [form.submitting]);

  return (
    <FormProvider value={{ ...form, setForm }}>
      <StyledForm
        id="form-new-team-name"
        className={className}
        onSubmit={(e) => {
          e.preventDefault();
          setForm("setSubmit", true);
        }}
      >
        <StyledSimpleInput name="teamName" placeholder={form.randomName} />
      </StyledForm>
    </FormProvider>
  );
}

const StyledForm = styled.form`
  grid-area: description;
  box-sizing: content-box;
  padding: 0 10px;
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

export { FormNewTeamName };
